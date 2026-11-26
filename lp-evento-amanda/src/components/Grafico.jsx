import { useEffect, useRef } from "react";

const dados = [
    // 3 áreas temáticas da GameJam com suas quantidades de inscritos
    { rotulo: "Programação", valor: 120 },
    { rotulo: "Arte 2D", valor: 80 },
    { rotulo: "Áudio/Música", valor: 45 },
];

function Grafico() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        // Limpa o canvas antes de desenhar (evita sobreposição)
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const maior = Math.max(...dados.map((d) => d.valor));
        const alturaBarra = 26;

        dados.forEach((item, i) => {
            const largura = (item.valor / maior) * 220; // a maior barra tem 220px
            const y = 20 + i * 50; // cada barra 50px abaixo da anterior

            // 1. escolha a cor da barra (cor primária do evento: #046575)
            ctx.fillStyle = "#046575";

            // 2. desenhe a barra com fillRect, começando em x = 110
            ctx.fillRect(110, y, largura, alturaBarra);

            // 3. troque a cor para escuro e escreva o rótulo em x = 10
            ctx.fillStyle = "#1f2937"; // cinza escuro para contraste
            ctx.font = "bold 13px system-ui, sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillText(item.rotulo, 10, y + alturaBarra / 2);

            // 4. escreva o valor logo depois do fim da barra
            ctx.fillStyle = "#307885"; // cor de destaque do evento
            ctx.font = "600 13px system-ui, sans-serif";
            ctx.fillText(item.valor, 110 + largura + 8, y + alturaBarra / 2);
        });
    }, []);

    return (
        <section className="rounded-2xl bg-white p-5 sm:p-8 shadow-sm border border-teal-100">
            <h2 className="text-2xl font-bold text-primaria">Inscritos por Área</h2>
            <p className="text-sm text-gray-600 mt-1">
                Distribuição dos participantes confirmados na GameJam OC 48h
            </p>
            <div className="mt-6 flex justify-center">
                <canvas
                    ref={canvasRef}
                    width={380}
                    height={170}
                    role="img"
                    aria-label="Gráfico de barras com inscritos por área: Programação com 120, Arte 2D com 80 e Áudio/Música com 45."
                    className="w-full max-w-[380px] h-auto"
                >
                    {/* Texto de fallback acessível para leitores de tela caso o canvas não seja renderizado */}
                    <p>
                        Gráfico de barras com inscritos por área: Programação (120), Arte 2D (80) e Áudio/Música (45).
                    </p>
                </canvas>
            </div>
        </section>
    );
}

export default Grafico;