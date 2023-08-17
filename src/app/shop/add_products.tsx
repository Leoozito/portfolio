"use client"

import React, { useState } from "react";
import { Button, Card, IconButton, Checkbox, Input, Select, Option, TabsHeader, Tab, TabsBody, Tabs, Typography,} from "@material-tailwind/react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Emitir_NotaFiscal: React.FC = () => {
  const [type, setType] = React.useState("informacaoNota");

  const [selected, setSelected] = useState<any>("0");
  const [serieNota, setSerieNota] = useState<any>("2");
  const [numeroNota, setNumeroNota] = useState<any>("1023");
  const [tipoOperacao, setTipoOperacao] = useState<any>("1");
  const [operacao, setOperacao] = useState<any>("0");
  const [naturezadaOperacao, setNaturezaDaOperacao] = useState<any>("0");
  const [dataDaEmissao, setDatadaEmissada] = useState<any>("")
  const [dataSaidaNota, setDataSaidaNota] = useState<any>("")
  const [selectedFinalidade, setSelectedFinalidade] = useState<any>("")
  const [localDaOperacao, setLocalDaOperacao] = useState<any>("")
  const [emissao, setEmissao] = useState<any>("")
  const [presenca, setPresenca] = useState<any>("")
  const [nomecliente, setNomeCliente] = useState<any>("Glauco")
  const [cpfCnpj, setCpfCnpj] = useState<any>()
  const [selectedProduto, setSelectedProduto] = useState<any>("")
  const [quantidade, setQuantidade] = useState<any>()
  const [valor, setValor] = useState<any>()
  const [consumidor, setConsumidor] = useState<any>("0")
  const [selectedFrete, setFrete] = useState<any>("0")
  const [cnpjTransportador, setCnpjTransportador] = useState("");
  const [ufTransportador, setUfTransportador] = useState("");
  const [placaTransportador, setPlacaTransportador] = useState("");
  const [complemento, setComplemento] = useState("")
  const [numero, setNumero] = useState("")
  const [bairro, setBairro] = useState("")

  const [porcentagemDesc, setPorcentagemDesc] = useState("")
  const [descontoPercentual, setDescontoPercentual] = useState("")
  const [valorDesconto, setValorDesconto] = useState("")
  const [valorFrete, setValorFrete] = useState("")
  const [valorSeguro, setValorSeguro] = useState("")
  const [valorDespesas, setValorDespesas] = useState("")

  const [placaCarroQtde, setPlacaCarroQtde] = useState<number>(0)
  const [placaMotoQtde, setPlacaMotoQtde] = useState<number>(0)
  const [placaMiniQtde, setPlacaMiniQtde] = useState<number>(0)
  const [suporteCarroQtde, setSuporteCarroQtde] = useState<number>(0)
  const [suporteMotoQtde, setSuporteMotoQtde] = useState<number>(0)

  const [precoPlacaCarro, setPrecoPlacaCarro] = useState<any>(44.44)
  const [precoPlacaMoto, setPrecoPlacaMoto] = useState<any>(40.00)
  const [precoPlacaMini, setPrecoplacaMini] = useState<any>(40.00)
  const [precoSuporteCarro, setPrecoSuporteCarro] = useState<any>(40.00)
  const [precoSuporteMoto, setPrecoSuporteMoto] = useState<any>(40.00)

  const TABLE_HEAD = ["Produtos","Quantidade","Valor"];
  const TABLE_ROWS = [
    {
      nomeProduto: "Placas de Carro",
      Quantidade: placaCarroQtde,
      Valor: `R$ ${precoPlacaCarro}`,
    },
    {
      nomeProduto: "Placas de Moto",
      Quantidade: placaMotoQtde,
      Valor: `R$ ${precoPlacaMoto}`,
    },
    {
      nomeProduto: "Placas de Mini",
      Quantidade: placaMiniQtde,
      Valor: `R$ ${precoPlacaMini}`,
    },
    {
      nomeProduto: "Suporte de Moto",
      Quantidade: suporteMotoQtde,
      Valor: `R$ ${precoSuporteMoto}`,
    },
    {
      nomeProduto: "Suporte de Carro",
      Quantidade: suporteCarroQtde,
      Valor: `R$ ${precoSuporteCarro}`,
    }
  ];

  // Cálculos para paginação da tabela
  const itemsPerPage = 10;
  const [paginaAtual, setPaginaAtual] = useState(1);
  const totalPaginas = Math.ceil(TABLE_ROWS.length / itemsPerPage);
  const indiceInicial = (paginaAtual - 1) * itemsPerPage;
  const itensVisiveis = TABLE_ROWS.slice(
    indiceInicial,
    indiceInicial + itemsPerPage
  );
  const ordemRenderizacao = ['nomeProduto',"Quantidade",'Valor'];

  // Paginação da tabela
  const anterior = () => {
    setPaginaAtual((paginaAnterior) => paginaAnterior - 1);
  };
  const proxima = () => {
    setPaginaAtual((proximaPagina) => proximaPagina + 1);
  };
  const trocarPagina = (numeroPagina: any ) => {
    setPaginaAtual(numeroPagina);
  };
  const numerosPaginas = Array.from({ length: totalPaginas }, (_, idx) => idx + 1);

  const [inscricaoEstadual, setInscricaoEstadual] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [descricaoCidade, setDescricaoCidade] = useState("");
  const [uf, setUf] = useState("");
  const [tipoLogradouro, setTipoLogradouro] = useState<any>('')
  const [cep, setCep] = useState<any>('')

  const handleFreteChange = (e:any) => {
    setFrete(e);
  };

  const definindoOperacao = () => {
    if (tipoOperacao === "1") {
      setOperacao("1")
      setNaturezaDaOperacao("1")
      setLocalDaOperacao("1")
      setSelectedFinalidade("1")
    }
  }

  const [quantidadeProduto, setQuantidadeProduto] = useState<number>(0);

  const handleAddPlacasCar = () => {
    if (quantidadeProduto > 0) {
      setPlacaCarroQtde(placaCarroQtde + quantidadeProduto)
      setPrecoPlacaCarro((placaCarroQtde + 1) * precoPlacaCarro)
      setQuantidadeProduto(0); // Resetar o valor do input após a adição
    }
  };

  const handleAddPlacasMoto = () => {
    if (quantidadeProduto > 0) {
      setPlacaMotoQtde(placaMotoQtde + quantidadeProduto)
      setQuantidadeProduto(0); // Resetar o valor do input após a adição
    }
  };

  const handleAddPlacasMini = () => {
    if (quantidadeProduto > 0) {
      setPlacaMiniQtde(placaMiniQtde + quantidadeProduto)
      setQuantidadeProduto(0); // Resetar o valor do input após a adição
    }
  };

  const handleAddSuportCar = () => {
    if (quantidadeProduto > 0) {
      setSuporteCarroQtde(suporteCarroQtde + quantidadeProduto)
      setQuantidadeProduto(0); // Resetar o valor do input após a adição
    }
  };

  const handleAddSuportMoto = () => {
    if (quantidadeProduto > 0) {
      setSuporteMotoQtde(suporteMotoQtde + quantidadeProduto)
      setQuantidadeProduto(0); // Resetar o valor do input após a adição
    }
  };


  return (
    <>
      <div 
        className='rounded-md bg-white/40 ring-1 ring-white/60 shadow-xl'
      >
        <h2 
          className='p-3 font-mono text-lg font-semibold text-gray-800 tracking-tight justify-center items-center flex sm:text-2xl subpixel-antialiased'
        >
          Dados da Nota Fiscal
        </h2>
      </div>
      <Card className="bg-white/40 border py-6 px-10 rounded-xl shadow-xl mt-4 overflow-hidden space-y-2">
          <Tabs value={type} className=" overflow-auto ">
              <TabsHeader className="relative mb-4">
                <Tab value="informacaoNota" onClick={() => setType("informacaoNota")}>
                  Informações da Nota
                </Tab>
                <Tab value="produtos" onClick={() => setType("produtos")}>
                  Produtos
                </Tab>
              </TabsHeader>
          </Tabs>
          {type === "informacaoNota" && (
            <>
            <div className="flex flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select
                  label="Tipo Pagina "
                  value={selected}
                  onChange={(e) => {
                    setSelected(e)
                  }}
                >
                  <Option value={'0'} className="hidden md:block">NFE</Option>
                  <Option value={'1'} className="hidden md:block">NFCE</Option>

                </Select>
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
              <Select label="Tipo de Operação"
                  value={tipoOperacao}
                  onChange={(e) => {
                    setTipoOperacao(e)
                    definindoOperacao();
                  }}>
                  <Option value={"0"} className="hidden md:block">Entrada</Option>
                  <Option value={"1"} className="hidden md:block">Saida</Option>
                </Select>
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4">
                <Input 
                  label="Numero da nota" 
                  className="rounded"
                  value={numeroNota} 
                  onChange={(e) => setNumeroNota(e)}
                />
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="Série " 
                  className="rounded" 
                  value={serieNota} 
                  onChange={(e) => setSerieNota(e)}
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select label="Operação"
                  value={operacao}
                  onChange={(e) => setOperacao(e)}
                >
                  <Option value={"0"} className="hidden md:block">1 - Venda de produção do estabelecimento -  </Option>
                  <Option value={"1"} className="hidden md:block">2 - Devolução de venda de produção do estabelecimento</Option>
                </Select>
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select label="Natureza da Operação"
                  value={naturezadaOperacao}
                  onChange={(e) => setNaturezaDaOperacao(e)}>
                  <Option value={"0"} className="hidden md:block">5101 - Venda de Produção do Estabelecimento </Option>
                  <Option value={"1"} className="hidden md:block">1201 - Devolução de Venda de Produção do Estabelecimento</Option>
                </Select>
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select label="Emissão"
                  value={emissao}
                  onChange={(e) => setEmissao(e)}
                >
                  <Option value={"0"} className="hidden md:block">1 - Emissão Normal -  </Option>
                  <Option value={"1"} className="hidden md:block">2 -  Contingência fs-ia com impressão danfe em formulario de segurança </Option>
                </Select>
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-5">
                <Select label="Presença"
                  value={presenca}
                  onChange={(e) => setPresenca(e)}
                >
                  <Option value={"0"} className="hidden md:block">1 -Não se Aplica (ajuste ou devolução) -  </Option>
                  <Option value={"1"} className="hidden md:block">2 -  Operação presencial  </Option>
                </Select>
              </div> 
            </div>
            
            <div className="flex flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="Data de emissão da nota" 
                  value={dataDaEmissao} 
                  className="rounded" 
                  onChange={(e) => setDatadaEmissada(e)}
                />
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Input 
                  label="Data de saida da nota" 
                  value={dataSaidaNota} 
                  className="rounded" 
                  onChange={(e) => setDataSaidaNota(e)}
                />
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select label="Finalidade"
                  value={selectedFinalidade}
                  onChange={(e) => setSelectedFinalidade(e)}
                  className="rounded"
                >
                  <Option value="entrada">Normal </Option>
                  <Option value="saida">Devolução</Option>
                </Select>
              </div>

              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                <Select label="Local da Operação"
                  value={localDaOperacao}
                  onChange={(e) => setLocalDaOperacao(e)}
                  className="rounded"
                >
                  <Option value="entrada">Interna </Option>
                  <Option value="saida">Devolução</Option>
                </Select>
              </div>
            </div>
            
            <h1 className="font-bold">Dados de Entrega da Nota</h1>

            <div className="flex flex-wrap">
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                <Input 
                  label="Nome ou Razão Social"
                  value={nomecliente}
                  className="rounded"
                  onChange={(e) => setNomeCliente(e)}
                />
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                <Input 
                  label="CPF/CNPJ" 
                  value={cpfCnpj} 
                  className="rounded" 
                  onChange={(e) => setCpfCnpj(e)}
                />
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                <Select label="Consumidor" value={consumidor}
                  onChange={(e) => setConsumidor(e)}
                  className="rounded">
                  <Option value={"0"}>Consumidor final </Option>
                  <Option value={"1"}>Normal</Option>
                </Select>
              </div>
              <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                <Select 
                  label="Frete" 
                  onChange={handleFreteChange} 
                  className="rounded"
                >                
                  <Option value={"0"}>Sem frete</Option>
                  <Option value={"1"}>Frete por conta do Emitente</Option>
                  <Option value={"2"}>Frete por conta do Remetente</Option>
                  <Option value={"3"}>Frete por conta de Terceiros</Option>
                  <Option value={"4"}>Transporte Próprio por conta do Remetente</Option>
                  <Option value={"5"}>Transporte Próprio por conta do Destinatário</Option>
                </Select>
              </div>
            </div>

            {(selectedFrete === "1" || selectedFrete === "2" || selectedFrete === "3") && (
                <>
                  <h1 className="font-bold mt-2">Dados da Transportadora</h1>
                  <div className="flex flex-wrap">
                    <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                      <Input
                        label="CNPJ Transportador"
                        value={cnpjTransportador}
                        onChange={e => setCnpjTransportador(e.target.value)}
                        className="rounded"
                      />
                    </div>
                    <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                      <Input
                        label="UF Transportador"
                        value={ufTransportador}
                        onChange={e => setUfTransportador(e.target.value)}
                        className="rounded"
                      />
                    </div>
                    <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                      <Input
                        label="Placa Transportador"
                        value={placaTransportador}
                        onChange={e => setPlacaTransportador(e.target.value)}
                        className="rounded"
                      />
                    </div>
                  </div>
                </>
            )}
            {selectedFrete != "0" && selectedFrete != "4" && (
            <>
              <h1 className="font-bold mt-2">Endereço do Remetente</h1>

              <div className="flex flex-wrap">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input  
                      label="CEP:" 
                      className="mr-3 h-10 w-40 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-900 p-2" 
                      value={cep}
                      onChange={(e) => setCep(e)}
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input
                    label="Inscrição Estadual"
                    value={inscricaoEstadual}
                    onChange={e => setInscricaoEstadual(e.target.value)}
                    className="rounded"
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Select
                      label="Tipo Logradouro:" 
                      value={tipoLogradouro}
                      onChange={(e) => setTipoLogradouro(e)}
                  >
                      <Option value={'RUA'} className="hidden md:block">RUA</Option>
                      <Option value={'AVENIDA'} className="hidden md:block">AVENIDA</Option>
                      <Option value={'ALAMEDA'} className="hidden md:block">ALAMEDA</Option>
                      <Option value={'TRAVESSA'} className="hidden md:block">TRAVESSA</Option>
                      <Option value={'PRAÇA'} className="hidden md:block">PRAÇA</Option>
                      <Option value={'RODOVIA'} className="hidden md:block">RODOVIA</Option>
                      <Option value={'ESTRADA'} className="hidden md:block">ESTRADA</Option>
                  </Select> 
                  
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input 
                    label="Logradouro" 
                    value={logradouro} 
                    onChange={e => setLogradouro(e.target.value)}
                    className="rounded" 
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mt-2 mb-4">
                  <Input 
                    label="UF" 
                    value={uf}
                    onChange={e => setUf(e.target.value)} 
                    className="rounded" 
                  />
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input 
                    label="Cidade" 
                    value={descricaoCidade}
                    onChange={e => setDescricaoCidade(e.target.value)} 
                    className="rounded" 
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input 
                    label="Bairro" 
                    className="rounded"
                    onChange={(e) => setBairro(e.target.value)}
                    value={bairro}
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input 
                    label="Nº" 
                    className="rounded"
                    onChange={(e) => setNumero(e.target.value)}
                    value={numero}
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4">
                  <Input 
                    label="Complemento" 
                    className="rounded"
                    onChange={(e) => setComplemento(e.target.value)}
                    value={complemento}
                  />
                </div>
              </div>
              <div className="flex flex-wrap">

                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input 
                    label="% de Desconto" 
                    value={porcentagemDesc}
                    onChange={e => setPorcentagemDesc(e.target.value)} 
                    className="rounded" 
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input 
                    label="Desconto do Percentual" 
                    className="rounded"
                    onChange={(e) => setDescontoPercentual(e.target.value)}
                    value={descontoPercentual}
                    disabled
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input 
                    label="Valor Desconto" 
                    className="rounded"
                    onChange={(e) => setValorDesconto(e.target.value)}
                    value={valorDesconto}
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input 
                    label="Valor do Frete" 
                    className="rounded"
                    onChange={(e) => setValorFrete(e.target.value)}
                    value={valorFrete}
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input 
                    label="Valor do Seguro" 
                    className="rounded"
                    onChange={(e) => setValorSeguro(e.target.value)}
                    value={valorSeguro}
                  />
                </div>
                <div className="w-full sm:w-auto sm:flex-1 sm:mr-4 mb-4 mt-4">
                  <Input 
                    label="Valor de Outras Despesas" 
                    className="rounded"
                    onChange={(e) => setValorDespesas(e.target.value)}
                    value={valorDespesas}
                  />
                </div>

              </div>
            </>
            )}
        </>
        )}
        {type === "produtos" && (
          <>
            <div className="flex flex-wrap space-x-6 justify-evenly">
              <div className="sm:w-auto sm:mr-4 mb-4">
                <h1 className="font-bold">Placas de Carro</h1>
                <div className="flex">
                  <input
                    value={quantidadeProduto}
                    onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
                    type="number"
                    className="h-10 w-32 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-md focus:ring-blue-500 focus:border-blue-900 p-2"
                  />
                  <button
                    onClick={handleAddPlacasCar}
                    className="ml-2 h-10 px-4 text-xs bg-blue-600 text-white shadow-lg"
                  >
                      <AiOutlinePlus size={18} />
                  </button>
                </div>
              </div>
                  
              <div className="sm:w-auto sm:mr-4 mb-4">
                <h1 className="font-bold">Placas de Moto</h1>
                <div className="flex items-center">
                  <input
                    value={quantidadeProduto}
                    onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
                    type="number"
                    className="h-10 w-32 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-md focus:ring-blue-500 focus:border-blue-900 p-2"
                  />
                  <button
                    onClick={handleAddPlacasMoto}
                    className="ml-2 h-10 px-4 text-xs bg-blue-600 text-white shadow-lg"
                  >
                      <AiOutlinePlus size={18} />
                  </button>
                </div>
              </div>
                  
              <div className="sm:w-auto sm:mr-4 mb-4">
                <h1 className="font-bold">Placas Mini</h1>
                <div className="flex">
                  <input
                    value={quantidadeProduto}
                    onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
                    type="number"
                    className="h-10 w-32 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-md focus:ring-blue-500 focus:border-blue-900 p-2"
                  />
                  <button
                    onClick={handleAddPlacasMini}
                    className="ml-2 h-10 px-4 text-xs bg-blue-600 text-white shadow-lg"
                  >
                      <AiOutlinePlus size={18} />
                  </button>
                </div>
              </div>
                  
              <div className="sm:w-auto sm:mr-4 mb-4">
                <h1 className="font-bold">Suporte de Carro</h1>
                <div className="flex">
                  <input
                    value={quantidadeProduto}
                    onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
                    type="number"
                    className="h-10 w-32 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-md focus:ring-blue-500 focus:border-blue-900 p-2"
                  />
                  <button
                    onClick={handleAddSuportCar}
                    className="ml-2 h-10 px-4 text-xs bg-blue-600 text-white shadow-lg"
                  >
                      <AiOutlinePlus size={18} />
                  </button>
                </div>
              </div>
                  
              <div className="sm:w-auto sm:mr-4 mb-4">
                <h1 className="font-bold">Suporte de Moto</h1>
                <div className="flex">
                  <input
                    value={quantidadeProduto}
                    onChange={(e) => setQuantidadeProduto(parseInt(e.target.value))}
                    type="number"
                    className="h-10 w-32 border bg-transparent border-gray-400 text-gray-800 text-sm rounded-md focus:ring-blue-500 focus:border-blue-900 p-2"
                  />
                  <button
                    onClick={handleAddSuportMoto}
                    className="ml-2 h-10 px-4 text-xs bg-blue-600 text-white shadow-lg flex items-center justify-center"
                  >
                      <AiOutlinePlus size={18} />
                  </button>
                </div>
              </div>
            </div>

            <table className="w-full bg-white/80 mt-4">
              <thead className="bg-blue-gray-100">
                <tr className="border-gray-400 border">
                  {TABLE_HEAD.map((head) => (
                    <th 
                      key={head} 
                      className="w-26 p-4 text lg font-semibold tracking-wide text-center">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className=" leading-none opacity-70 font-bold "
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {itensVisiveis.filter((row) => row.Quantidade > 0).map((row, index) => (                  
                  <tr key={index} className="border-b even:bg-blue-gray-50/50">
                    {ordemRenderizacao.map((key) => (
                      <td key={key} className="text-center p-4 text-sm text-gray-700 whitespace-nowrap">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {row[key]}
                        </Typography>
                      </td>
                    ))}   
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center items-center py-3">
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1"
                onClick={anterior}
                disabled={paginaAtual === 1}
              >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Anterior
              </Button>
              <div className="flex items-center gap-1">
                {numerosPaginas.map((numeroPagina) => (
                  <IconButton
                    key={numeroPagina}
                    onClick={() => trocarPagina(numeroPagina)}
                    className='py-1 px-1 '
                  >
                    {numeroPagina}
                  </IconButton>
                ))}
              </div>
              <Button
                variant="text"
                color="blue-gray"
                className="flex items-center gap-1"
                onClick={proxima}
                disabled={paginaAtual === totalPaginas}
              >
                Próxima
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            </div>
          </>
        )}
      </Card>
    </>
  );
}

export default Emitir_NotaFiscal;