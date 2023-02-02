import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

function ProjectForm ({btnText}) {

    return (
        <form className={styles.form}>
            <Input
            type="text"
            text="Nome do Projeto"
            name="name"
            placeholder="Insira o nome do Projecto"
            />
            <Input
            type="number"
            text="Orcamento do Projecto"
            name="budget"
            placeholder="Insira o Orcamento do Projecto"
            />
            
            <Select name="category_id" text="Selecione a Categoria"/>

            <SubmitButton  text={btnText}/>
            
        </form>
    )
            
        
}

export default ProjectForm