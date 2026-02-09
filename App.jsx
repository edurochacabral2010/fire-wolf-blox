import { useState } from "react";

const ADMIN_EMAIL = "edurochacabral2010@gmail.com";
const ADMIN_SENHA = "20,Senha";

export default function FireWolfBlox() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [pagou, setPagou] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [chat, setChat] = useState([]);

  const produtos = [
    { id: 1, nome: "Conta Blox Fruits", preco: 49.9, categoria: "Conta", img: "https://i.imgur.com/8Q2Q9ZB.png" },
    { id: 2, nome: "Game Pass", preco: 29.9, categoria: "Game Pass", img: "https://i.imgur.com/YZ6G7Qp.png" },
    { id: 3, nome: "Fruta Rara", preco: 19.9, categoria: "Fruta", img: "https://i.imgur.com/6X4YQZQ.png" }
  ];

  function login() {
    if (email && senha) setUser(email);
  }

  function enviarMsg() {
    if (!mensagem) return;
    setChat([...chat, { autor: user === ADMIN_EMAIL ? "Admin" : "Cliente", texto: mensagem }]);
    setMensagem("");
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">🔥 Fire Wolf BLOX</h1>

      {!user && (
        <div className="bg-zinc-900 p-4 rounded max-w-sm">
          <input placeholder="Email" className="w-full p-2 mb-2 text-black" onChange={e => setEmail(e.target.value)} />
          <input placeholder="Senha" type="password" className="w-full p-2 mb-2 text-black" onChange={e => setSenha(e.target.value)} />
          <button onClick={login} className="bg-red-600 w-full p-2">Entrar / Criar conta</button>
        </div>
      )}

      {user && !pagou && (
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {produtos.map(p => (
            <div key={p.id} className="bg-zinc-900 p-3 rounded">
              <img src={p.img} className="mb-2" />
              <h2 className="font-bold">{p.nome}</h2>
              <p className="text-red-500">R$ {p.preco}</p>
              <button onClick={() => setPagou(true)} className="bg-red-600 mt-2 w-full p-2">Comprar</button>
            </div>
          ))}
        </div>
      )}

      {user && pagou && (
        <div className="mt-6 bg-zinc-900 p-4 rounded">
          <h2 className="text-xl text-red-600 font-bold">Pagamento via Pix</h2>
          <p>Chave Pix: <b>45415547800</b></p>
          <p>Nome: Eduardo Rocha Cabral</p>
          <button onClick={() => setPagou(true)} className="bg-green-600 mt-2 p-2">Já paguei</button>

          <div className="mt-4">
            <h3 className="font-bold">Chat</h3>
            <div className="bg-black p-2 h-40 overflow-y-auto mb-2">
              {chat.map((c, i) => (
                <p key={i}><b>{c.autor}:</b> {c.texto}</p>
              ))}
            </div>
            <input value={mensagem} onChange={e => setMensagem(e.target.value)} placeholder="Digite..." className="w-full p-2 text-black" />
            <button onClick={enviarMsg} className="bg-red-600 w-full p-2 mt-2">Enviar</button>
          </div>
        </div>
      )}
    </div>
  );
}
