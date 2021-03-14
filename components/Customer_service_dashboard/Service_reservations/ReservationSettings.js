function ReservationSettings (){
    const workdays = 'Dias laborales';
    const monday = 'Lunes';
    const tuesday = 'Martes';
    const wednesday = 'Miercoles';
    const thursday = 'Jueves';
    const friday = 'Viernes';
    const saturday = 'Sabado';
    const sunday = 'Domingo';
    const openingTime = 'Hora de apertura'
    const closingTime = 'Hora de cierre'
    const manualTime = 'Ecribir hora'
    return(
        <div>
            Reservaciones automaticas
            <div>
                SELECCIONA EL DIA O DIAS
                <select>
                    <option value='workdays'>{workdays}</option>
                    <option value='monday'>{monday}</option>
                    <option value='tuesday'>{tuesday}</option>
                    <option value='wendnesday'>{wednesday}</option>
                    <option value='thursday'>{thursday}</option>
                    <option value='friday'>{friday}</option>
                    <option value='saturday'>{saturday}</option>
                    <option value='sunday'>{sunday}</option>
                </select>
            </div>
            <div>
                TIPO DE RESERVACIONES
                <button>Horarios manuales</button>
                <button>Horarios fijos automaticos</button>
            </div>
            <div>
                DESDE 
                <select>
                    <option value='openingTime'>{openingTime}</option>
                    <option value='manualOpeningTime'>{manualTime}</option>
                </select>
                HASTA 
                <select>
                    <option value='closingTime'>{closingTime}</option>
                    <option value='manualClosingTime'>{manualTime}</option>
                </select>
            </div>
            <div>
                PERIODO DE LAS RESERVACIONES <br/>
                CADA<input type='tel' min="1" max="1440"/>
            </div>
        </div>
    )
}
export default ReservationSettings