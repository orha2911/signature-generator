import express from 'express';
import nunjucks from 'nunjucks';
import cors from 'cors';
import templates from './templates.js';

const app = express();
const port = 3030;

// Configure nunjucks for template rendering
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

// Set up CORS
app.use(cors());
app.use(express.json());
// Endpoint for generating email signatures
app.post('/generate-signatures', async (req, res) => {
    try {
        const { templateId, personalInfoList, webhookUrl } = req.body;

        // Find the selected template
        const selectedTemplate = templates.find(template => template.id === templateId);

        if (!selectedTemplate) {
            return res.status(400).json({ error: 'Template not found' });
        }

        // Process each personal info asynchronously
        const signatures = await Promise.all(
            personalInfoList.map(async (personalInfo) => {
                try {
                    // Generate email signature using the provided template and personal info
                    const signature = await generateSignature(selectedTemplate, personalInfo);
                    return signature;
                } catch (error) {
                    console.error('Error processing personal info:', error);
                    return null; // or handle error accordingly
                }
            })
        );

        res.status(200).json({ message: 'Signatures generation initiated successfully.', signatures });
    } catch (error) {
        console.error('Error generating signatures:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Function to generate email signature
async function generateSignature(template, personalInfo) {
    // Render the signature HTML using Nunjucks
    const renderedHtml = nunjucks.renderString(template.html, personalInfo);
    return renderedHtml;
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
