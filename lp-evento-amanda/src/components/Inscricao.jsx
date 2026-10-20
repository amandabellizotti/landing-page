import { useState } from 'react';

function Inscricao() {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');
    const [enviado, setEnviado] = useState(false);

    function enviar(e) {
        e.preventDefault();
        setEnviado(true);
    }

    if (enviado) {
        return (
            // ADICIONADO id="inscricao" aqui também para não quebrar a navegação após o envio
            <article id="inscricao" className="rounded-xl bg-white p-6 shadow max-w-4xl mx-auto my-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Inscrição</h2>
                <div className="text-green-600 font-semibold p-4 bg-green-50 rounded-lg text-center space-y-1">
                    <p>Obrigado pela inscrição, <span className="font-bold">{nome}</span>!</p>
                    <p className="text-sm font-normal">Enviamos os detalhes para <span className="underline">{email}</span>.</p>
                </div>
            </article>
        );
    }

    return (
        // CORREÇÃO: Certifique-se de que a tag principal do componente tenha o id="inscricao"
        <article id="inscricao" className="rounded-xl bg-white p-6 shadow max-w-4xl mx-auto my-6">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Inscrição</h2>
            
            <form onSubmit={enviar} className="space-y-4 w-full">
                <label className="flex flex-col gap-2 w-full text-gray-700 font-medium">
                    Nome completo
                    <input
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
                    />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 w-full text-gray-700 font-medium">
                        Número de telefone
                        <input
                            type="tel"
                            required
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="(18) 99999-9999"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
                        />
                    </label>

                    <label className="flex flex-col gap-2 w-full text-gray-700 font-medium">
                        E-mail
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu-email@exemplo.com"
                            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-gray-900"
                        />
                    </label>
                </div>
                
                <div className="flex justify-end pt-2">
                    <button 
                        type="submit" 
                        className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 py-3 rounded-lg transition-colors cursor-pointer text-center"
                    >
                        Quero receber
                    </button>
                </div>
            </form>
        </article>
    );
}

export default Inscricao;
