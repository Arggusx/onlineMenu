import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function ValidarPedido() {
    const [status, setStatus] = useState<'validando' | 'sucesso' | 'erro'>('validando');

    const { id, token: tokenEncoded } = useParams();

    if (!id || !tokenEncoded) {
        return <p>Parâmetros inválidos</p>;
    }

    const token = decodeURIComponent(tokenEncoded ?? '');

    useEffect(() => {
        const validar = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_MENU_API_URL}/qrcode/pedidos/validar/${id}/${token}`);
                if (response.ok) {
                    setStatus('sucesso');
                } else {
                    setStatus('erro');
                }
            } catch {
                setStatus('erro');
            }
        };

        validar();
    }, [id, token]);

    return (
        <div className="flex items-center justify-center h-screen bg-white text-center">
            {status === 'validando' && <p className="text-xl">Validando pedido...</p>}
            {status === 'sucesso' && <p className="text-green-600 text-2xl font-bold">✅ Pedido validado com sucesso!</p>}
            {status === 'erro' && <p className="text-red-600 text-2xl font-bold">❌ QR Code inválido ou expirado.</p>}
        </div>
    );
}