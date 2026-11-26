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
            <article id="inscricao" className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-teal-100">
                <h2 className="text-2xl font-bold mb-4 text-primaria">Inscrição</h2>
                <div className="text-teal-800 font-semibold p-5 bg-fundo border border-teal-200 rounded-xl text-center space-y-1.5">
                    <p className="text-base sm:text-lg">Obrigado pela inscrição, <span className="font-bold text-primaria">{nome}</span>!</p>
                    <p className="text-sm font-normal text-gray-600">Enviamos os detalhes para <span className="underline font-medium">{email}</span>.</p>
                </div>
            </article>
        );
    }

    return (
        // CORREÇÃO: Certifique-se de que a tag principal do componente tenha o id="inscricao"
        <article id="inscricao" className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-teal-100">
            <h2 className="text-2xl font-bold mb-2 text-primaria">Inscrição</h2>
            <p className="text-sm text-gray-600 mb-6">Preencha seus dados para garantir sua vaga no evento.</p>
            
            <form onSubmit={enviar} className="space-y-4 w-full">
                <label className="flex flex-col gap-1.5 w-full text-sm text-destaque font-semibold">
                    Nome completo
                    <input
                        type="text"
                        required
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Seu nome completo"
                        className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-destaque focus:border-transparent text-gray-900 font-normal transition"
                    />
                </label>

                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 w-full text-sm text-destaque font-semibold">
                        Número de telefone
                        <input
                            type="tel"
                            required
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="(18) 99999-9999"
                            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-destaque focus:border-transparent text-gray-900 font-normal transition"
                        />
                    </label>

                    <label className="flex flex-col gap-1.5 w-full text-sm text-destaque font-semibold">
                        E-mail
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="seu-email@exemplo.com"
                            className="w-full p-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-destaque focus:border-transparent text-gray-900 font-normal transition"
                        />
                    </label>
                </div>
                
                <div className="flex justify-end pt-2">
                    <button 
                        type="submit" 
                        className="w-full sm:w-auto bg-destaque hover:bg-primaria text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-sm cursor-pointer text-center"
                    >
                        Quero participar
                    </button>
                </div>
            </form>
        </article>
    );
}

export default Inscricao;
