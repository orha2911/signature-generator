export const templates = [
  {
    id: 1,
    name: 'Simple Template',
    content: `<table style="width: 100%; background-color: #f5f5f5; padding: 10px; border-radius: 5px;">
      <tr>
        <td style="font-family: sans-serif; font-size: 16px; color: #333;">
          {{fullName}}
        </td>
      </tr>
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; color: #888;">
        {{email}}
        </td>
      </tr>
      <tr>
        <td style="font-family: sans-serif; font-size: 14px; color: #888;">
          {{mobilePhone}}
        </td>
      </tr>
    </table>`,
    previewData: {
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      mobilePhone: '123-456-7890',
    },
  },
  {
    id: 2,
    name: 'Template with Logo',
    content: `<table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0;">
          <img src="/logo.png" alt="Company Logo" style="width: 100px;" />
        </td>
        <td style="padding: 10px; vertical-align: top;">
          <span style="font-family: sans-serif; font-size: 16px; font-weight: bold;">{{fullName}}</span><br>
          <span style="font-family: sans-serif; font-size: 14px; color: #888;">{{email}}</span><br>
          <span style="font-family: sans-serif; font-size: 14px; color: #888;">{{mobilePhone}}</span>
        </td>
      </tr>
    </table>`,
    previewData: {
      fullName: 'Jane Smith',
      email: 'janesmith@company.com',
      mobilePhone: '987-654-3210',
    },
  },
  // Add more templates with preview data
];
