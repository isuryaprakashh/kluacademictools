import React from 'react';
import SEO from './SEO';

const Privacy = () => {
    return (
        <div className="max-w-[800px] mx-auto p-8 font-sans text-text-main">
            <SEO
                title="Privacy Policy"
                description="Learn how KLU Academic Tools handles your data securely on your device."
                url="/privacy"
            />
            <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Privacy Policy</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-text-muted leading-relaxed mb-4">
                    We collect minimal information required to operate the service. This includes:
                </p>
                <ul className="list-disc pl-6 text-text-muted space-y-2">
                    <li>Attendance data (stored locally on your device)</li>
                    <li>Grades and course details (stored locally on your device)</li>
                    <li>Feedback submitted through our contact forms (sent to our support team)</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-text-muted leading-relaxed">
                    Your academic data never leaves your device. We use locally stored data solely to perform calculations for attendance and GPA. Feedback data is used to improve our services.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Data Security</h2>
                <p className="text-text-muted leading-relaxed">
                    Since all sensitive academic data is stored locally in your browser's storage, you maintain full control over your data. We do not have access to your personal academic records.
                </p>
            </section>

            <div className="mt-12 pt-8 border-t border-border-color text-center text-text-muted">
                <p>Last updated: January 2026</p>
            </div>
        </div>
    );
};

export default Privacy;
