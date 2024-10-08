import { Button } from "react-bootstrap";
import Link from "next/link";

export default function TabelaCat({ categoria, deleteCategoria }) {

    const handleDelete = async (event) => {
        event.preventDefault();
        await deleteCategoria(categoria.codigo); // Chama a função delete diretamente
    };

    return (
        <>
            <tr>
                <td align="center">
                    <Link className="btn btn-info" title="Editar"
                        href={`/privado/categoria/${categoria.codigo}/formulario`}>
                        <i className="bi bi-pencil-square"></i>
                    </Link>
                    <form onSubmit={handleDelete} className="d-inline">
                        <Button className="btn btn-danger" title="Excluir" type="submit">
                            <i className="bi bi-trash"></i>
                        </Button>
                    </form>
                </td>
                <td>{categoria.codigo}</td>
                <td>{categoria.nome}</td>
            </tr>
        </>
    );
}
