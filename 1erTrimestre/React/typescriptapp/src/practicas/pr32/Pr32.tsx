import React, { useRef, useState } from 'react'

type Props = {}

type Producto = {
    nombre:string,
    precio: number,
    cantidad: number,
}

export default function FormularioProductos(props:Props){
    
    const [listarProductos, setlistarProductos] = useState<Array<Producto>>([]);
    const [filtrado, setfiltrado] = useState<Array<Producto>>([]);

    const refInput = useRef<HTMLInputElement>({} as HTMLInputElement);

    function procesarformulario(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        let formulario = e.currentTarget;
        const nombre = formulario.nombre.value ?? "";
        const precio = Number(formulario.precioid.value ?? 0);
        const cantidad = Number(formulario.cantidad.value ?? 0);

        const producto: Producto = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };
        setlistarProductos([...listarProductos, producto]);
    }

    function filtrar(){
        let palabra = refInput.current.value;
        setfiltrado(listarProductos.filter(p => p.nombre.toLowerCase().includes(palabra.toLowerCase())));
    }

    return (
        <>
            <h3>Info de Productos</h3>
            <form onSubmit={procesarformulario}>
                <label htmlFor="nombreid">Nombre</label>
                <input type="text" name="nombre" id="nombreid" /><br />
                <label htmlFor="precioid">Precio</label>
                <input type="number" name="precio" id="precioid" /><br />
                <label htmlFor="cantidadid">Cantidad</label>
                <input type="text" name="cantidad" id="cantidadid" /><br />
                <button type='submit'>Agregar</button>
            </form>
            <input type="text" name="filtro" id="filtro" onChange={filtrar}/>
            {filtrado}
            <textarea value={JSON.stringify(listarProductos, null, 2)} cols={100} rows={30}></textarea>
        </>
    )

}

