import './index.css'

export default function Searchbar(){
    return(
        <div id='searchbar'>
            <div id='search'>
                <h3>BUSCAR</h3>
                <input type="text" placeholder="Item o categoría"/>
            </div>
            <div id='order'>
                <h3>ORDENAR POR</h3>
                <select>
                   <option value="mayoramenor" disabled selected>Mayor a menor</option>
                   <option value="menoramayor">Menor a mayor</option>
                </select> 
            </div>
            <div>
                <h3>PRECIO</h3>
                <div id="price">
                    <label>MIN</label>
                    <input type="number" name="min" id="min" placeholder="0"/>
                    <p>-</p>
                    <label>MAX</label>
                    <input type="number" name="max" id="max" placeholder="0"/>
                </div>
                </div>
            <div>
                <h3>FILTRAR</h3>
                <div id='filter'>
                    <div>
                        <input type="checkbox" name="nuevos" id="nuevos" />
                        <input type="checkbox" name="ofertas" id="ofertas" />
                        <input type="checkbox" name="edicion_especial" id="edicion_especial" />
                        <input type="checkbox" name="favoritos" id="favoritos" />
                    </div>
                    <div>
                        <label htmlFor="nuevos">NUEVOS</label>
                        <label htmlFor="ofertas">OFERTAS</label>
                        <label htmlFor="edicion_especial">EDICIÓN ESPECIAL</label>
                        <label htmlFor="favoritos">FAVORITOS</label>
                    </div>
                </div>
            </div>
        </div>
    )
}