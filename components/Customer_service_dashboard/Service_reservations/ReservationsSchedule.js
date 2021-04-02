import styles from '../../../styles/CustomerReservationsSchedule.module.css'
function ReservationsSchedule (){
    const title = 'Lista de horarios';
    const addSchedule = 'AGREGAR HORARIO'
    const workdays = 'Dias laborales'; /*GET THEM FROM THE USER INFORMATION*/ 
    const monday = 'Lunes';
    const tuesday = 'Martes';
    const wednesday = 'Miercoles';
    const thursday = 'Jueves';
    const friday = 'Viernes';
    const saturday = 'Sabado';
    const sunday = 'Domingo';
    const schedule = '16:00 a 16:30'
    const description = 'Descripcion corta del motivo de la reservacion';
    const editItem = 'EDITAR';
    const deleteItem = 'ELIMINAR'
    return(
        <div className={styles.MainContainer}>
{/*SCHEDULE TITLE */}
            <div className={styles.TitleContainer}>{title}</div>
            <div className={styles.AddScheduleContainer}>
                <button className={styles.AddScheduleButton}>{addSchedule}</button>
            </div>

{/*DAY/S SELECTION */}
            <div className={styles.DaysSelectionContainer}>
                <select className={styles.DaysSelection}>
                    <option value={workdays}>{workdays}</option>
                    <option value={monday}>{monday}</option>
                    <option value={tuesday}>{tuesday}</option>
                    <option value={wednesday}>{wednesday}</option>
                    <option value={thursday}>{thursday}</option>
                    <option value={friday}>{friday}</option>
                    <option value={saturday}>{saturday}</option>
                    <option value={sunday}>{sunday}</option>
                    
                </select>
            </div>

{/*SCHEDULE LIST */}
            <div className={styles.ScheduleListContainer}>
            {/*SCHEDULE ITEM */}
                <div className={styles.ScheduleItem}>
                    <div className={styles.ScheduleTimeContainer}>{schedule}</div>
                    <div className={styles.ScheduleDescription}>{description}</div>
                    
                    <div className={styles.ScheduleButtonsContainer}>
                        <button className={styles.EditItemSchedule}>{editItem}</button>
                        <button className={styles.DeleteSchedule}>{deleteItem}</button>
                    </div>

                </div>

                {/*SCHEDULE ITEM */}
                <div className={styles.ScheduleItem}>
                    <div className={styles.ScheduleTimeContainer}>{schedule}</div>
                    <div className={styles.ScheduleDescription}>{description}</div>
                    
                    <div className={styles.ScheduleButtonsContainer}>
                        <button className={styles.EditItemSchedule}>{editItem}</button>
                        <button className={styles.DeleteSchedule}>{deleteItem}</button>
                    </div>

                </div>

                {/*SCHEDULE ITEM */}
                <div className={styles.ScheduleItem}>
                    <div className={styles.ScheduleTimeContainer}>{schedule}</div>
                    <div className={styles.ScheduleDescription}>{description}</div>
                    
                    <div className={styles.ScheduleButtonsContainer}>
                        <button className={styles.EditItemSchedule}>{editItem}</button>
                        <button className={styles.DeleteSchedule}>{deleteItem}</button>
                    </div>

                </div>

                {/*SCHEDULE ITEM */}
                <div className={styles.ScheduleItem}>
                    <div className={styles.ScheduleTimeContainer}>{schedule}</div>
                    <div className={styles.ScheduleDescription}>{description}</div>
                    
                    <div className={styles.ScheduleButtonsContainer}>
                        <button className={styles.EditItemSchedule}>{editItem}</button>
                        <button className={styles.DeleteSchedule}>{deleteItem}</button>
                    </div>

                </div>

                {/*SCHEDULE ITEM */}
                <div className={styles.ScheduleItem}>
                    <div className={styles.ScheduleTimeContainer}>{schedule}</div>
                    <div className={styles.ScheduleDescription}>{description}</div>
                    
                    <div className={styles.ScheduleButtonsContainer}>
                        <button className={styles.EditItemSchedule}>{editItem}</button>
                        <button className={styles.DeleteSchedule}>{deleteItem}</button>
                    </div>

                </div>

                {/*SCHEDULE ITEM */}
                <div className={styles.ScheduleItem}>
                    <div className={styles.ScheduleTimeContainer}>{schedule}</div>
                    <div className={styles.ScheduleDescription}>{description}</div>
                    
                    <div className={styles.ScheduleButtonsContainer}>
                        <button className={styles.EditItemSchedule}>{editItem}</button>
                        <button className={styles.DeleteSchedule}>{deleteItem}</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default ReservationsSchedule