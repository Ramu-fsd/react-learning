import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const beneficiarySchema = z.object({
  legalName: z.string().trim().min(2, 'Enter at least 2 characters').max(80),
  accountNumber: z.string().regex(/^\d{8,18}$/, 'Account number must contain 8–18 digits'),
  country: z.string().min(2, 'Select a country'),
  email: z.email('Enter a valid email address'),
});
type BeneficiaryValues = z.infer<typeof beneficiarySchema>;

export default function BeneficiaryForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<BeneficiaryValues>({
    resolver: zodResolver(beneficiarySchema),
    defaultValues: { legalName: '', accountNumber: '', country: 'US', email: '' },
  });
  const [submitted, setSubmitted] = useState(false);

  async function submit(values: BeneficiaryValues) {
    await new Promise((resolve) => window.setTimeout(resolve, 350));
    console.info('Validated beneficiary payload (demo):', { ...values, accountNumber: '********' });
    setSubmitted(true);
    reset();
  }

  return (
    <section className="panel">
      <p className="eyebrow">MODULE 02</p>
      <h2>Beneficiary onboarding form</h2>
      <p>React Hook Form manages form state while Zod validates the data contract.</p>
      {submitted && <p className="success">Beneficiary details passed client-side validation (demo only).</p>}
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-grid">
          <div className="field"><label htmlFor="legalName">Beneficiary legal name</label><input id="legalName" {...register('legalName')} />{errors.legalName && <p className="error">{errors.legalName.message}</p>}</div>
          <div className="field"><label htmlFor="accountNumber">Account number</label><input id="accountNumber" inputMode="numeric" {...register('accountNumber')} />{errors.accountNumber && <p className="error">{errors.accountNumber.message}</p>}</div>
          <div className="field"><label htmlFor="country">Country</label><select id="country" {...register('country')}><option value="US">United States</option><option value="IN">India</option><option value="GB">United Kingdom</option><option value="SG">Singapore</option></select>{errors.country && <p className="error">{errors.country.message}</p>}</div>
          <div className="field"><label htmlFor="email">Notification email</label><input id="email" type="email" {...register('email')} />{errors.email && <p className="error">{errors.email.message}</p>}</div>
        </div>
        <button disabled={isSubmitting} type="submit">{isSubmitting ? 'Validating…' : 'Validate beneficiary'}</button>
      </form>
      <p className="note">Client-side validation improves UX; the backend must independently validate and authorize every request. Do not enter real account details.</p>
    </section>
  );
}
