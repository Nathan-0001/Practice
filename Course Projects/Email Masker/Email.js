function maskEmail(email) {
    // Split the email into local part and domain
    const [localPart, domain] = email.split('@');
    // Mask the local part by replacing all but the first and last character with asterisks
    const maskedLocalPart = localPart.length > 2
        ? localPart[0] + '*'.repeat(localPart.length - 2) + localPart[localPart.length - 1]
        : localPart; // If local part is 2 characters or less, do not mask
    // Return the masked email
    return `${maskedLocalPart}@${domain}`;
}