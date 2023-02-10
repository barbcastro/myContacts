import ContactForm from '../../Components/ContactForm/Index';
import PageHeader from '../../Components/PageHeader';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <ContactForm
        buttonLabel="Cadastrar"
      />
    </>
  );
}
