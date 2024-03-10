// Example templates (you can customize this as needed)
const templates = [
    {
      id: 1,
      html:  `<table style="width: 100%; background-color: #f5f5f5; padding: 10px; border-radius: 5px;">
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
    </table>`
    },
    {
      id: 2,
      html: `<table style="width: 100%; border-collapse: collapse;">
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
    </table>`
    }
  ];
  
  export default templates;