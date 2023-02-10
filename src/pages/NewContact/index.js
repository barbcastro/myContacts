import PageHeader from '../../Components/PageHeader';
import Input from '../../Components/Input';
import Select from '../../Components/Select';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
      </Select>
    </>
  );
}
