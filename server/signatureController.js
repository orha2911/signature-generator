import nunjucks from 'nunjucks';
import templates from './templates.js';

async function generateSignature(template, personalInfo) {
    const renderedHtml = nunjucks.renderString(template.html, personalInfo);
    return renderedHtml;
}

export async function generateSignatures(req, res) {
    try {
        const { templateId, personalInfoList, webhookUrl } = req.body;
        const selectedTemplate = templates.find(template => template.id === templateId);

        if (!selectedTemplate) {
            return res.status(400).json({ error: 'Template not found' });
        }

        // Process each personal info asynchronously
        const signatures = await Promise.all(
            personalInfoList.map(async (personalInfo) => {
                try {
                    const signature = await generateSignature(selectedTemplate, personalInfo);
                    return signature;
                } catch (error) {
                    console.error('Error processing personal info:', error);
                    return null;
                }
            })
        );

        res.status(200).json({ message: 'Signatures generation initiated successfully.', signatures });
    } catch (error) {
        console.error('Error generating signatures:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
