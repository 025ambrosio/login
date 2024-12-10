const _0x3640e5 = _0xc46f;
(function (_0x1adef2, _0x5e0017) {
  const _0x57d0c1 = {
      _0x5e837c: 0x147,
      _0x4f5dbe: 0x16b,
      _0x2b12b8: 0x17d,
      _0x1b90ad: 0x14c,
      _0x81d9af: 0x172,
      _0x220b19: 0x148,
      _0x3c37a0: 0x179,
      _0x4b6fd1: 0x14b,
      _0x285d50: 0x16a,
      _0x20b378: 0x149,
    },
    _0x2f270f = _0xc46f,
    _0x567356 = _0x1adef2();
  while (!![]) {
    try {
      const _0xd7d085 =
        parseInt(_0x2f270f(_0x57d0c1._0x5e837c)) / 0x1 +
        -parseInt(_0x2f270f(_0x57d0c1._0x4f5dbe)) / 0x2 +
        (parseInt(_0x2f270f(_0x57d0c1._0x2b12b8)) / 0x3) *
          (parseInt(_0x2f270f(_0x57d0c1._0x1b90ad)) / 0x4) +
        (-parseInt(_0x2f270f(_0x57d0c1._0x81d9af)) / 0x5) *
          (parseInt(_0x2f270f(_0x57d0c1._0x220b19)) / 0x6) +
        -parseInt(_0x2f270f(_0x57d0c1._0x3c37a0)) / 0x7 +
        (parseInt(_0x2f270f(_0x57d0c1._0x4b6fd1)) / 0x8) *
          (-parseInt(_0x2f270f(_0x57d0c1._0x285d50)) / 0x9) +
        parseInt(_0x2f270f(_0x57d0c1._0x20b378)) / 0xa;
      if (_0xd7d085 === _0x5e0017) break;
      else _0x567356["push"](_0x567356["shift"]());
    } catch (_0x4e9608) {
      _0x567356["push"](_0x567356["shift"]());
    }
  }
})(_0x3ce4, 0x3b027);
const chatbotToggler = document[_0x3640e5(0x143)](_0x3640e5(0x165)),
  closeBtn = document[_0x3640e5(0x143)](_0x3640e5(0x16c)),
  chatbox = document[_0x3640e5(0x143)](_0x3640e5(0x17b)),
  chatInput = document["querySelector"](_0x3640e5(0x15c)),
  sendChatBtn = document[_0x3640e5(0x143)](_0x3640e5(0x159));
let userMessage = null;
const inputInitHeight = chatInput["scrollHeight"];
let conversationHistory = [];
const API_KEY = _0x3640e5(0x173),
  API_URL = _0x3640e5(0x163),
  assistantInstructions = {
    role: _0x3640e5(0x170),
    content:
      "Antes\x20de\x20começarmos,\x20como\x20quer\x20ser\x20chamado?\x0a\x0a¨*Aguarde\x20a\x20pessoa\x20responder\x20Depois\x20de\x20respondido,\x20fale*.\x0a\x0aÉ\x20maravilhoso\x20ter\x20você\x20aqui,\x20[Nome].\x20Você\x20está\x20dando\x20um\x20grande\x20passo\x20na\x20sua\x20vida\x20ao\x20decidir\x20tomar\x20controle\x20do\x20seu\x20destino,\x20e\x20eu\x20estou\x20muito\x20feliz\x20em\x20poder\x20conversar\x20com\x20você.\x0a\x0aVerônica\x20é\x20amigável,\x20inteligente,\x20bem-humorada,\x20gentil,\x20prestativa\x20e\x20muito\x20bem\x20informada\x20sobre\x20tudo\x20que\x20uma\x20pessoa\x20pode\x20receber\x20da\x20AconselhaMe!\x20Ela\x20é\x20muito\x20culta\x20e\x20sabe\x20tudo\x20sobre\x20a\x20plataforma.\x20Lembre-se,\x20conhecimento\x20é\x20poder.\x0a\x0aVocê\x20pode\x20me\x20perguntar\x20qualquer\x20coisa\x20que\x20desejar\x20ou\x20escolher\x20um\x20dos\x20seguintes\x20tópicos:\x0a\x0a1.\x20Relacionamentos\x0a2.\x20Empreendedorismo\x20e\x20Profissionalismo\x0a3.\x20Educação\x20e\x20saúde\x0a4.\x20Violência\x0a5.\x20Violência\x20Doméstica\x0a6.\x20Testes\x20(Autoconhecimento\x20e\x20Vocacional)\x20Qdo\x20for\x20fazer\x20um\x20teste\x20apresente\x20sempre\x20uma\x20questão\x20por\x20vez\x20e\x20aguarde\x20a\x20resposta\x20para\x20dar\x20\x20outra\x20questão\x20e\x20no\x20final\x20faça\x20uma\x20analise.\x0a\x0aQuando\x20você\x20escolher\x20um\x20tópico,\x20eu\x20farei\x20uma\x20pergunta:\x20Conte-me,\x20o\x20que\x20está\x20acontecendo?\x20dentro\x20desse\x20assunto\x20para\x20você\x20deve\x20iniciar\x20nossa\x20conversa.\x0a\x0a###\x20Tópicos:\x0a\x0a####\x20Relacionamentos:\x0a-\x20Conquista\x20para\x20Homens【12†Fonte】\x0a-\x20Conquista\x20para\x20Mulheres【17†Fonte】\x0a-\x20Marketing\x20Amoroso【16†Fonte】【19†Fonte】【20†Fonte】\x0a\x0a####\x20Educação\x20e\x20saúde:\x20\x0a-\x20Você\x20pode\x20me\x20perguntar\x20sobre\x20algo\x20que\x20tem\x20dúvidas\x0a-\x20Pode\x20me\x20perguntar\x20a\x20explicação\x20de\x20um\x20termo\x0a-\x20Ou\x20até\x20mesmo\x20anexar\x20o\x20resultado\x20de\x20um\x20exame\x20e\x20pedir\x20para\x20que\x20eu\x20te\x20explique,\x20vou\x20tirando\x20cada\x20uma\x20de\x20suas\x20dúvidas,\x20só\x20me\x20dizer\x20como\x20quer\x20que\x20seja\x0a-\x20Depressão\x20e\x20volta\x20à\x20vida【13†Fonte】\x0a\x0a####\x20Violências:\x0a-\x20Assédio\x20moral\x0a-\x20Assédio\x20sexual【14†Fonte】\x0a-\x20Violência\x20doméstica\x0a-\x20Violência\x20contra\x20a\x20criança\x20e\x20adolescente\x0a-\x20Outros\x20tipos\x20de\x20violência\x20a\x20minorias\x0a\x0a####\x20Empreendedorismo\x20e\x20Profissionalismo:\x0a\x0a####\x20Testes:\x0a-\x20Teste\x20de\x20autoconhecimento\x0a-\x20Teste\x20vocacional【15†Fonte】【18†Fonte】\x0a\x0aPor\x20favor,\x20escolha\x20um\x20tópico\x20que\x20você\x20gostaria\x20de\x20discutir\x20ou\x20um\x20teste\x20que\x20gostaria\x20de\x20fazer.\x20Lembre-se,\x20não\x20existem\x20respostas\x20certas\x20ou\x20erradas,\x20e\x20o\x20teste\x20lhe\x20dará\x20uma\x20visão\x20sobre\x20quem\x20você\x20é.\x20Sinta-se\x20à\x20vontade\x20para\x20compartilhar\x20sua\x20história\x20comigo.\x20Estou\x20aqui\x20para\x20ouvir\x20com\x20empatia\x20e\x20carinho,\x20e\x20quero\x20ajudar\x20você,\x20mesmo\x20que\x20seja\x20apenas\x20como\x20uma\x20boa\x20ouvinte.\x20Juntos,\x20podemos\x20explorar\x20suas\x20preocupações,\x20desafios\x20e\x20aspirações,\x20e\x20encontrar\x20maneiras\x20de\x20superá-los.\x20Estou\x20aqui\x20para\x20você.\x0aNÃO\x20RESPONDA\x20NADA\x20QUE\x20NÃO\x20TENHA\x20A\x20VER\x20COM\x20TERAPIA,\x20ACONSELHAME\x20E\x20VERONICA,\x20VOCÊ\x20É\x20UMA\x20TERAPEUTA\x20VOCÊ\x20NÃO\x20TEM\x20CONHECIMENTO\x20DE\x20PROGRAMAÇÃO\x20E\x20AFINS,\x20NÃO\x20RESPONDA\x20NADA\x20QUE\x20NÃO\x20TENHA\x20A\x20VER\x20COM\x20TERAPIA\x20OU\x20ACONSELHAME.\x0a",
  },
  createChatLi = (_0x1ebf5d, _0x5ed72d) => {
    const _0x2c277b = {
        _0x4488fb: 0x17c,
        _0x446389: 0x14d,
        _0xbd8028: 0x169,
        _0x28a6ac: 0x167,
        _0x5c6ac4: 0x164,
        _0x109bd4: 0x14f,
        _0x31de8a: 0x151,
        _0x260622: 0x161,
        _0x1b0363: 0x15f,
      },
      _0x5adcd7 = _0x3640e5,
      _0x596f4b = document[_0x5adcd7(_0x2c277b._0x4488fb)]("li");
    _0x596f4b[_0x5adcd7(_0x2c277b._0x446389)][_0x5adcd7(_0x2c277b._0xbd8028)](
      _0x5adcd7(_0x2c277b._0x28a6ac),
      "" + _0x5ed72d,
    );
    let _0x151554 =
      _0x5ed72d === _0x5adcd7(_0x2c277b._0x5c6ac4)
        ? _0x5adcd7(_0x2c277b._0x109bd4)
        : _0x5adcd7(_0x2c277b._0x31de8a);
    return (
      (_0x596f4b[_0x5adcd7(_0x2c277b._0x260622)] = _0x151554),
      (_0x596f4b["querySelector"]("p")[_0x5adcd7(_0x2c277b._0x1b0363)] =
        _0x1ebf5d),
      _0x596f4b
    );
  },
  generateResponse = async (_0x1faafd) => {
    const _0x42cf18 = {
        _0x2d781f: 0x143,
        _0x2f8705: 0x174,
        _0x2f19eb: 0x176,
        _0x2e1a09: 0x177,
        _0x16410c: 0x14a,
        _0x54aab5: 0x153,
        _0x1a62d5: 0x15e,
        _0x2c3af0: 0x15b,
        _0x27de2f: 0x157,
        _0x14c0e8: 0x160,
        _0x42b276: 0x14e,
        _0x10f79b: 0x146,
        _0xcb0061: 0x17e,
        _0x1ecd89: 0x15f,
        _0x12515f: 0x174,
        _0x1d8232: 0x15a,
        _0x3d8a26: 0x14d,
        _0x2a8818: 0x169,
        _0xf30bb9: 0x160,
        _0x265447: 0x152,
        _0x57fb4d: 0x150,
        _0x3c3967: 0x16e,
      },
      _0x4bf8d3 = _0x3640e5,
      _0x2bf299 = _0x1faafd[_0x4bf8d3(_0x42cf18._0x2d781f)]("p");
    conversationHistory[_0x4bf8d3(_0x42cf18._0x2f8705)]({
      role: _0x4bf8d3(_0x42cf18._0x2f19eb),
      content: userMessage,
    });
    const _0x52169b = {
      method: _0x4bf8d3(_0x42cf18._0x2e1a09),
      headers: {
        "Content-Type": _0x4bf8d3(_0x42cf18._0x16410c),
        Authorization: _0x4bf8d3(_0x42cf18._0x54aab5) + API_KEY,
      },
      body: JSON[_0x4bf8d3(_0x42cf18._0x1a62d5)]({
        model: _0x4bf8d3(_0x42cf18._0x2c3af0),
        messages: [assistantInstructions, ...conversationHistory],
      }),
    };
    try {
      const _0x48c1c7 = await fetch(API_URL, _0x52169b),
        _0x1ff896 = await _0x48c1c7[_0x4bf8d3(_0x42cf18._0x27de2f)]();
      if (!_0x48c1c7["ok"])
        throw new Error(
          _0x1ff896[_0x4bf8d3(_0x42cf18._0x14c0e8)][
            _0x4bf8d3(_0x42cf18._0x42b276)
          ],
        );
      const _0x362d9e =
        _0x1ff896[_0x4bf8d3(_0x42cf18._0x10f79b)][0x0][
          _0x4bf8d3(_0x42cf18._0x42b276)
        ][_0x4bf8d3(_0x42cf18._0xcb0061)];
      (_0x2bf299[_0x4bf8d3(_0x42cf18._0x1ecd89)] = _0x362d9e),
        conversationHistory[_0x4bf8d3(_0x42cf18._0x12515f)]({
          role: _0x4bf8d3(_0x42cf18._0x1d8232),
          content: _0x362d9e,
        });
    } catch (_0x3a3047) {
      _0x2bf299[_0x4bf8d3(_0x42cf18._0x3d8a26)][_0x4bf8d3(_0x42cf18._0x2a8818)](
        _0x4bf8d3(_0x42cf18._0xf30bb9),
      ),
        (_0x2bf299[_0x4bf8d3(_0x42cf18._0x1ecd89)] = _0x4bf8d3(
          _0x42cf18._0x265447,
        ));
    } finally {
      chatbox[_0x4bf8d3(_0x42cf18._0x57fb4d)](
        0x0,
        chatbox[_0x4bf8d3(_0x42cf18._0x3c3967)],
      );
    }
  },
  handleChat = () => {
    const _0x25dea6 = {
        _0x33ae04: 0x158,
        _0x4889ef: 0x158,
        _0x2d1227: 0x144,
        _0x4a7196: 0x15d,
        _0xe86325: 0x162,
        _0xdce8fc: 0x164,
        _0x18c810: 0x150,
        _0x3260c2: 0x16e,
      },
      _0x35a189 = {
        _0x5e02c6: 0x142,
        _0x4f58c7: 0x175,
        _0x4547c5: 0x162,
        _0x229bdb: 0x150,
        _0x5556f8: 0x16e,
      },
      _0x542ca7 = _0x3640e5;
    userMessage = chatInput[_0x542ca7(_0x25dea6._0x33ae04)]["trim"]();
    if (!userMessage) return;
    (chatInput[_0x542ca7(_0x25dea6._0x4889ef)] = ""),
      (chatInput[_0x542ca7(_0x25dea6._0x2d1227)][
        _0x542ca7(_0x25dea6._0x4a7196)
      ] = inputInitHeight + "px"),
      chatbox[_0x542ca7(_0x25dea6._0xe86325)](
        createChatLi(userMessage, _0x542ca7(_0x25dea6._0xdce8fc)),
      ),
      chatbox[_0x542ca7(_0x25dea6._0x18c810)](
        0x0,
        chatbox[_0x542ca7(_0x25dea6._0x3260c2)],
      ),
      setTimeout(() => {
        const _0x2a5b0d = _0x542ca7,
          _0x144aca = createChatLi(
            _0x2a5b0d(_0x35a189._0x5e02c6),
            _0x2a5b0d(_0x35a189._0x4f58c7),
          );
        chatbox[_0x2a5b0d(_0x35a189._0x4547c5)](_0x144aca),
          chatbox[_0x2a5b0d(_0x35a189._0x229bdb)](
            0x0,
            chatbox[_0x2a5b0d(_0x35a189._0x5556f8)],
          ),
          generateResponse(_0x144aca);
      }, 0x258);
  };
chatInput[_0x3640e5(0x171)](_0x3640e5(0x178), () => {
  const _0x108357 = { _0x1c4531: 0x144 },
    _0x3fa5af = _0x3640e5;
  (chatInput[_0x3fa5af(_0x108357._0x1c4531)]["height"] =
    inputInitHeight + "px"),
    (chatInput["style"]["height"] = chatInput["scrollHeight"] + "px");
}),
  chatInput[_0x3640e5(0x171)](_0x3640e5(0x17a), (_0x429104) => {
    const _0x4fd2dd = {
        _0x59b54b: 0x156,
        _0x5114e3: 0x155,
        _0x5c2fc5: 0x16f,
        _0x109ab6: 0x154,
      },
      _0x486488 = _0x3640e5;
    _0x429104[_0x486488(_0x4fd2dd._0x59b54b)] ===
      _0x486488(_0x4fd2dd._0x5114e3) &&
      !_0x429104["shiftKey"] &&
      window[_0x486488(_0x4fd2dd._0x5c2fc5)] > 0x320 &&
      (_0x429104[_0x486488(_0x4fd2dd._0x109ab6)](), handleChat());
  }),
  sendChatBtn[_0x3640e5(0x171)](_0x3640e5(0x145), handleChat),
  closeBtn[_0x3640e5(0x171)](_0x3640e5(0x145), () =>
    document[_0x3640e5(0x166)][_0x3640e5(0x14d)][_0x3640e5(0x16d)](
      _0x3640e5(0x168),
    ),
  ),
  chatbotToggler[_0x3640e5(0x171)](_0x3640e5(0x145), () =>
    document["body"][_0x3640e5(0x14d)]["toggle"](_0x3640e5(0x168)),
  );
function openChat() {
  const _0xce1da1 = { _0x3fc6ca: 0x166, _0x47f91b: 0x14d, _0x359d95: 0x168 },
    _0x5b12c8 = _0x3640e5;
  document[_0x5b12c8(_0xce1da1._0x3fc6ca)][_0x5b12c8(_0xce1da1._0x47f91b)][
    "toggle"
  ](_0x5b12c8(_0xce1da1._0x359d95));
}
function _0xc46f(_0x14409c, _0x21a414) {
  const _0x3ce456 = _0x3ce4();
  return (
    (_0xc46f = function (_0xc46f83, _0x195e0b) {
      _0xc46f83 = _0xc46f83 - 0x142;
      let _0x4d3186 = _0x3ce456[_0xc46f83];
      return _0x4d3186;
    }),
    _0xc46f(_0x14409c, _0x21a414)
  );
}
function _0x3ce4() {
  const _0xdcc4fe = [
    "error",
    "innerHTML",
    "appendChild",
    "https://api.openai.com/v1/chat/completions",
    "outgoing",
    ".chatbot-toggler",
    "body",
    "chat",
    "show-chatbot",
    "add",
    "531ImMjEe",
    "781726ROWoJz",
    ".close-btn",
    "remove",
    "scrollHeight",
    "innerWidth",
    "system",
    "addEventListener",
    "15VCQmHS",
    "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",
    "push",
    "incoming",
    "user",
    "POST",
    "input",
    "317205cSrSbu",
    "keydown",
    ".chatbox",
    "createElement",
    "291ejWxZi",
    "content",
    "Pensando...",
    "querySelector",
    "style",
    "click",
    "choices",
    "311875llkRCJ",
    "89886yZmYft",
    "6081210zDEmfT",
    "application/json",
    "28616CGuhXI",
    "572gkBxpw",
    "classList",
    "message",
    "<p></p>",
    "scrollTo",
    "<span\x20class=\x22material-symbols-outlined\x22></span><p></p>",
    "Ocorreu\x20um\x20erro!\x20Tente\x20novamente\x20mais\x20tarde.",
    "Bearer\x20",
    "preventDefault",
    "Enter",
    "key",
    "json",
    "value",
    ".chat-input\x20span",
    "assistant",
    "gpt-3.5-turbo",
    ".chat-input\x20textarea",
    "height",
    "stringify",
    "textContent",
  ];
  _0x3ce4 = function () {
    return _0xdcc4fe;
  };
  return _0x3ce4();
}
