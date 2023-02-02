import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'


function NewProject(){

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projecto</h1>
            <p>Crie os seus Projectos para depois adicionar os servicos</p>

            <ProjectForm btnText ="Criar Project"/>
            
        </div>

    )

}

export default NewProject