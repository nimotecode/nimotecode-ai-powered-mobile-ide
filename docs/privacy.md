# Privacy Policy

**Effective Date:** April 16, 2026

This Privacy Policy explains how NimoteCode handles data when you use our mobile app and related support channels.

## 1. Scope

This policy applies to NimoteCode mobile applications and official support channels.

## 2. Data We Process

### 2.1 Account and Sign-In Data

When you sign in, we process account data via Firebase Authentication, including:

- User ID
- Email address (for email/password sign-in)
- Sign-in provider metadata (for example, Google Sign-In)

### 2.2 Subscription and Trial Data

To provide Pro features and trial controls, we process:

- Subscription entitlement and purchase state (via RevenueCat and app stores)
- Trial status fields (for example trial start/end and whether trial was used)
- A hashed device-trial identifier used to help prevent repeated trial abuse

### 2.3 Workspace and App Preference Data

Depending on usage, NimoteCode stores:

- SSH profile and workspace connection settings (for example host, port, username, auth method, workspace root)
- App settings and preferences (for example theme, language, editor and keyboard preferences)
- Workflow metadata and chat/agent history in workspace `.nimote` paths (local and/or remote, depending on your workflow)

### 2.4 AI Configuration and AI Request Data

If you configure AI providers, we process:

- Provider configuration values you enter (for example provider type, base URL, model, API key)
- Prompts and content you choose to send

AI requests are sent only to the provider endpoints you configure.

### 2.5 Operational Diagnostics

We may process limited operational logs needed for reliability, troubleshooting, and security.

## 3. How We Use Data

We use data to:

- Authenticate users and secure accounts
- Provide app functionality (workspace, editor, terminal, source control, AI, tasks, timeline)
- Verify subscription and trial eligibility
- Maintain service reliability, security, and support operations

## 4. Third Parties and Data Sharing

NimoteCode relies on third parties for specific functions:

- Firebase (authentication and related cloud backend capabilities)
- RevenueCat (subscription entitlement synchronization)
- App Store / Google Play (in-app purchase billing, renewals, refunds under store policy)
- User-selected AI providers (AI inference endpoints configured by you)
- User-selected remote servers (SSH/SFTP operations)

We do not sell personal data.

## 5. Permissions and Device Access

Depending on platform and features, the app may use permissions such as:

- Network access (`INTERNET`) for remote development, auth, subscription checks, and AI/provider communication
- Billing access (Google Play Billing) for subscription purchases
- Storage-related permissions on Android for file/workspace operations
- Foreground service permissions on Android for long-running active workflows

Permissions are used for app functionality, not for selling personal data.

## 6. Data Retention

- Local data remains on your device/workspace until removed by you (for example app data clear, workspace cleanup, `.nimote` deletion)
- Cloud account/subscription records are retained as needed for service operation, fraud prevention, security, dispute handling, and legal compliance
- Retention periods may vary by legal and operational requirements

## 7. Your Choices and Rights

You can:

- Manage or remove local app/workspace data directly
- Remove AI provider configurations to stop sending new requests to that provider
- Request account/privacy assistance (including deletion requests where applicable) via support contact channels

## 8. Security

We apply reasonable technical and organizational safeguards. No method of transmission or storage can be guaranteed 100% secure.

## 9. Children

NimoteCode is not directed to children under 13 (or the applicable minimum age in your region).

## 10. International Processing

Because configured providers and infrastructure may operate in different regions, data may be processed outside your country in accordance with applicable law.

## 11. Policy Updates

We may update this policy. The latest published version and effective date on this page control.

## 12. Contact

- Email: aoun.ma@foxmail.com
- GitHub Issues: https://github.com/nimotecode/nimote_issues/issues
