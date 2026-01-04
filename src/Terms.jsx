import React from 'react';
import SEO from './SEO';

const Terms = () => {
    return (
        <div className="max-w-[800px] mx-auto p-8 font-sans text-text-main">
            <SEO
                title="Terms of Service"
                description="Terms and conditions for using KLU Academic Tools."
                url="/terms"
            />
            <h1 className="text-4xl font-extrabold mb-8 tracking-tight">Terms of Service</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-text-muted leading-relaxed">
                    By accessing and using this attendance and GPA calculator tool, you agree to be bound by these Terms of Service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Use of Service</h2>
                <ul className="list-disc pl-6 text-text-muted space-y-2">
                    <li>You are responsible for the accuracy of the data you enter.</li>
                    <li>The calculations provided are estimates and should be verified with official university records.</li>
                    <li>You agree not to misuse the service or attempt to disrupt its functionality.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
                <p className="text-text-muted leading-relaxed">
                    This tool is provided "as is" without any warranties. We are not responsible for any academic discrepancies or issues arising from the use of this tool. Always cross-check with your official portal.
                </p>
            </section>

            <div className="mt-12 pt-8 border-t border-border-color text-center text-text-muted">
                <p>Last updated: January 2026</p>
            </div>
        </div>
    );
};

export default Terms;
