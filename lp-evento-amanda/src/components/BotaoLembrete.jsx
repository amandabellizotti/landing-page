import { useState } from "react";
function BotaoLembrete() {
    const [mensagem, setMensagem] = useState("");

        async function ativarLembrete() {
            // 1. Se o navegador não tiver 'Notification' em window,
            // mostre a mensagem "Este navegador não aceita notificações." e pare (return)
            if (!('Notification' in window)) {
                setMensagem("Este navegador não aceita notificações.");
                return;
            }

            // 2. Peça a permissão e guarde a resposta numa constante
            // (lembre: requestPermission devolve uma Promise, use await)
            const permissao = await Notification.requestPermission();

            // 3. Se a resposta for diferente de 'granted',
            // mostre "Você não permitiu as notificações." e pare
            if (permissao !== 'granted') {
                setMensagem("Você não permitiu as notificações.");
                return;
            }

            // 4. Espere o Service Worker ficar pronto e guarde em 'registro'
            const registro = await navigator.serviceWorker.ready;

            // 5. Mostre a notificação com registro.showNotification(...)
            registro.showNotification("GameJam OC 48h", {
                body: "Não perca! O evento começa em breve.",
                icon: "/icone-192.png",
            });

            // 6. Mostre na tela a mensagem "Lembrete ativado!"
            setMensagem("Lembrete ativado!");
        }
    
     return (
    <div className="mt-2">
      {/* Botão estilizado com Tailwind */}
      <button
        type="button"
        onClick={ativarLembrete}
        className="bg-destaque hover:bg-white hover:text-primaria text-white text-sm font-semibold px-4 py-2.5 rounded-lg border border-white/30 transition-all duration-200 shadow cursor-pointer flex items-center gap-2"
      >
        🔔 Me lembre do evento
      </button>
      {/* Mensagem de status */}
      {mensagem && (
        <p role="status" className="mt-2 text-sm text-white/90 font-medium">
          {mensagem}
        </p>
      )}
    </div>
  );
}
    
export default BotaoLembrete;