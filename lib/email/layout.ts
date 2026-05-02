type LayoutProps = {
  title: string;
  preheader?: string;
  children: string;
};

export function emailLayout({ title, preheader = "", children }: LayoutProps): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
          line-height: 1.6;
          color: #333;
          background-color: #f9f9f9;
        }
        .email-container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #ffffff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .email-header {
          background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);
          color: #ffffff;
          padding: 40px 20px;
          text-align: center;
        }
        .email-header h1 {
          font-size: 28px;
          margin-bottom: 10px;
          font-weight: 600;
        }
        .email-header p {
          font-size: 16px;
          opacity: 0.95;
        }
        .email-body {
          padding: 40px 20px;
        }
        .email-body h2 {
          font-size: 20px;
          margin-bottom: 15px;
          color: #1f2937;
        }
        .email-body p {
          margin-bottom: 15px;
          font-size: 14px;
          line-height: 1.8;
        }
        .email-body strong {
          color: #1f2937;
        }
        .info-box {
          background-color: #f3f4f6;
          border-left: 4px solid #7c3aed;
          padding: 15px;
          margin: 20px 0;
          border-radius: 4px;
        }
        .info-box p {
          margin-bottom: 8px;
        }
        .info-box p:last-child {
          margin-bottom: 0;
        }
        .cta-button {
          display: inline-block;
          background-color: #7c3aed;
          color: #ffffff;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          margin: 20px 0;
          font-size: 14px;
        }
        .cta-button:hover {
          background-color: #6d28d9;
        }
        .email-footer {
          background-color: #f9f9f9;
          border-top: 1px solid #e5e7eb;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #6b7280;
        }
        .email-footer p {
          margin-bottom: 5px;
        }
        .divider {
          height: 1px;
          background-color: #e5e7eb;
          margin: 20px 0;
        }
      </style>
    </head>
    <body>
      <!-- Email preheader for client preview -->
      <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Arial, sans-serif; max-height: 0; max-width: 0; opacity: 0; overflow: hidden;">
        ${preheader || title}
      </div>
      <div class="email-container">
        <div class="email-header">
          <h1>Simplicity Web Inc</h1>
          <p>${title}</p>
        </div>
        <div class="email-body">
          ${children}
        </div>
        <div class="email-footer">
          <p>&copy; 2024 Simplicity Web Inc. All rights reserved.</p>
          <p>Toronto-based web development company specializing in WordPress, SEO, and custom web applications.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
