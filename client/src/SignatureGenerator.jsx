import { useState } from 'react';
import axios from 'axios';
import './SignatureGenerator.css';
import { templates } from './templates.js'; 

const SignatureGenerator = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilePhone, setMobilePhone] = useState('');
  const [generatedSignatureHTML, setGeneratedSignatureHTML] = useState('');
  const [generatedSignaturePlainText, setGeneratedSignaturePlainText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTemplateClick = (template) => {
    setSelectedTemplate(template);
  };

  const generatePlainTextSignature = () => {
    const plainTextSignature = `
      ${fullName}
      Email: ${email}
      Mobile: ${mobilePhone}
      `;
  
    setGeneratedSignaturePlainText(plainTextSignature);
  };

  const generateSignatures = async () => {
    if (!selectedTemplate) {
      setError('Please select a template.');
      return;
    }

    if (!fullName.trim() || !email.trim() || !mobilePhone.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!isValidPhoneNumber(mobilePhone)) {
      setError('Please enter a valid phone number.');
      return;
    }

    setLoading(true);

    try {
      const personalInfoList = {
        fullName,
        email,
        mobilePhone,
      };
      const response = await axios.post('http://localhost:3030/generate-signatures', {
        templateId: selectedTemplate.id,
        personalInfoList: [
          personalInfoList
        ]
      });
      setGeneratedSignatureHTML(response.data.signatures[0]);
      setError('');
    } catch (error) {
      console.error('Error generating signatures:', error);
      setError('An error occurred while generating signatures.');
    } finally {
      setLoading(false);
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    const phoneRegex = /^\d+$/;
    return phoneRegex.test(phone);
  };

  return (
    <div className="email-signature-box">
      <h1>Email Signature Generator</h1>

      <div className="user-info">
        <h2>Your Information:</h2>
        <input type="text" placeholder="Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Phone" value={mobilePhone} onChange={(e) => setMobilePhone(e.target.value)} />
      </div>

      {error && <p className="error-message">{error}</p>}

      <h2>Choose a Template:</h2>
      <div className="template-gallery">
        {templates.map((template) => (
          <div
            key={template.id}
            className={`template ${selectedTemplate && selectedTemplate.id === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateClick(template)}
          >
            <h3>{template.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: template.content.replace(/{{(.*?)}}/g, (match, placeholder) => template.previewData[placeholder]) }} />
          </div>
        ))}
      </div>

      <div className="action-buttons">
        <button onClick={generateSignatures} disabled={loading}>
          Generate HTML Signature
        </button>
        <button onClick={generatePlainTextSignature} disabled={loading}>
          Generate Plain Text Signature
        </button>
      </div>

      {loading && <p>Loading...</p>}

      {generatedSignatureHTML && (
        <div>
          <h3>Generated HTML Signature Preview:</h3>
          <div dangerouslySetInnerHTML={{ __html: generatedSignatureHTML }} />
        </div>
      )}

      {generatedSignaturePlainText && (
        <div>
          <h3>Generated Plain Text Signature Preview:</h3>
          <pre>{generatedSignaturePlainText}</pre>
        </div>
      )}
    </div>
  );
};

export default SignatureGenerator;
