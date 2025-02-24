import { CDBInput, CDBBtnGrp, CDBBtn, CDBContainer,CDBBox,CDBCard, CDBCardBody, CDBDataTable, CDBRow, CDBCol  } from "cdbreact";
import Figure from 'react-bootstrap/Figure'; 
import FigMagnel from './FigMagnel.png'


function TutotMagnel() {


        function testClickEvent(param) {
          alert('Row Click Event');
        }
      
        const data = () => {
          return {
            columns: [
              {
                label: '-',
                field: 'linha',
                width: 50,
                attributes: {
                  'aria-controls': 'DataTable',
                  'aria-label': '-',
                },
              },
              {
                label: 'Parâmetros',
                field: 'parametro',
                width: 200,
              },
              {
                label: 'Unidades',
                field: 'unidades',
                width: 50,
              },],
              rows: [
                {
                  linha: '1',
                  parametro: 'Defina o valor de epmin',
                  unidades: '-',
                  clickEvent: () => testClickEvent(1),
                },
            
                {
                    linha: '2',
                    parametro: 'Defina o valor de epmax',
                    unidades: '-',
                
                  },
                  {
                    linha: '3',
                    parametro: 'Área bruta da seção transversal',
                    unidades: 'm²',
                
                  },
                  {
                    linha: '4',
                    parametro: ' Volume de concreto na parte tracionada',
                    unidades: 'm³',
                
                  },
                  {
                    linha: '5',
                    parametro: ' Volume de concreto na parte comprimida',
                    unidades: 'm³',
                
                  },
                  {
                    linha: '6',
                    parametro: 'Tensão de compressão no concreto',
                    unidades: 'kPa',
                
                  },
                  {
                    linha: '7',
                    parametro: 'Tensão de tração no concreto',
                    unidades: 'kPa',
                
                  },
                  {
                    linha: '8',
                    parametro: 'Fator de perda de protensão',
                    unidades: '-',
                
                  },
                  {
                    linha: '9',
                    parametro: 'Momento Total',
                    unidades: 'kN.m',
                
                  },
                ],
            };};
        
        
            const data1 = () => {
                return {
                  columns: [
                    {
                      label: '-',
                      field: 'linha',
                      width: 50,
                      attributes: {
                        'aria-controls': 'DataTable',
                        'aria-label': '-',
                      },
                    },
                    {
                      label: 'Parâmetros',
                      field: 'parametro',
                      width: 200,
                    },
                    {
                      label: 'Unidades',
                      field: 'unidades',
                      width: 50,
                    },],
                    rows: [
                      {
                        linha: '1',
                        parametro: 'Equação da reta 1',
                        unidades: '-',
                        clickEvent: () => testClickEvent(1),
                      },
                  
                      {
                          linha: '2',
                          parametro: 'Equação da reta 2 ',
                          unidades: '-',
                      
                        },
                        {
                          linha: '3',
                          parametro: 'Equação da reta 3',
                          unidades: '-',
                      
                        },
                        
                      ],
                  };};
              
                  const data2 = () => {
                    return {
                      columns: [
                        {
                          label: ' 1 dia',
                          field: 'umdia',
                          width: 50,
                          attributes: {
                            'aria-controls': 'DataTable',
                            'aria-label': '-',
                          },
                        },
                        {
                          label: '2 dias ',
                          field: 'doisdia',
                          width: 50,
                        },
                        {
                          label: '4 dias',
                          field: 'quatrodia',
                          width: 50,
                        },
                    
                        {
                            label: '7 dias ',
                            field: 'setedia',
                            width: 50,
                          },
                          {
                            label: '14 dias ',
                            field: 'quatorzedia',
                            width: 50,
                          },
                          {
                            label: '21 dias ',
                            field: 'vinteumdia',
                            width: 50,
                          },
                          {
                            label: '28 dias ',
                            field: 'vinteeoitodia',
                            width: 50,
                          },],

                        rows: [
                          {
                            umdia : '21.20',
                            doisdia: '28.90',
                            quatrodia: '36.00',
                            setedia: '40.95',
                            quatorzedia: '46.00',
                            vinteumdia: '48.50',
                            vinteeoitodia: '50.00',
                            clickEvent: () => testClickEvent(1),
                          },
                      
                          
                             
                          ],
                      };};
                  
              
    return (
        
      <div>
        <CDBContainer>
      <CDBBtnGrp>
        <CDBBtn color="primary" href="TMagnel">Teoria</CDBBtn>
        <CDBBtn color="primary" href="TutotMagnel">Tutorial</CDBBtn>
        <CDBBtn color="primary" href="Magnel">Calculadora</CDBBtn>
      </CDBBtnGrp>
    </CDBContainer>
        <h3>Tutorial</h3>
        <p>O diagrama de Magnel é uma ferramenta gráfica utilizada para determinar a distribuição de tensões ao longo da seção transversal de uma peça de concreto protendido.</p>

        <p>Para utilizar o diagrama de Magnel, basta preencher os campos com os valores desejados e clicar no botão "Calcular".</p>

        <p>Os dados de entrada são:</p>

        <CDBContainer>
      <CDBRow className="py-3">
        <CDBCol md="12">
          <CDBCard>
            <CDBCardBody>
              <CDBDataTable striped bordered hover paging={false} data={data()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer>

            <p>Os valores de saída são:</p>

            <CDBContainer>
      <CDBRow className="py-3">
        <CDBCol md="12">
          <CDBCard>
            <CDBCardBody>
              <CDBDataTable striped bordered hover paging={false} data={data1()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer>

           
<p></p>
<p></p>

            <h3>Exemplo 1</h3>
            <p>Você é projetista de peças protendidas em uma indústria e precisa verificar o projeto de uma viga. Sabe-se que as cargas de cálculo são: (a) Força de protensão inicial: 600 kN, (b) Carga de peso próprio 3,75 kN/m, (c) Carga variável de 15 kN/m (
                ψ1=0,60 Combinação frequente e  ψ2=0,40 Combinação quase permanente) e (d) Carga permanente externa de 3 kN/m. Considerando que a viga de concreto é bi-apoiada, com um vão de 7 metros, seção transversal com dimensões: b=0,20m e h=0,75m (ver Figura 1) e que a curva de resistência mecânica do concreto utilizado é dado conforme a Tabela 1. Também considere que a introdução da protensão será realizada no segundo dia e que a armadura longitudinal total (Asp) da seção transversal é de 3,96 cm² (4 cordoalhas de 0,99 cm² 
                    fu=1888,89 MPa) de aço em uma cordoalha do tipo CP 190 RB 12,70 mm.</p>
<p>Para a determinação das tensões elásticas, considere perdas de 5% para o ato da protensão e 15% de perda acumuladas até o serviço, totalizando uma perda de protensão total de 20%.</p>

<p>Tabela 1. Curva de resistência à compressão do concreto empregado na viga em MPa considerando um agregado de granito.</p>

<CDBContainer>
      <CDBRow className="py-3">
        <CDBCol md="12">
          <CDBCard>
            <CDBCardBody>
              <CDBDataTable striped bordered hover paging={false} data={data2()} materialSearch />
            </CDBCardBody>
          </CDBCard>
        </CDBCol>
      </CDBRow>
    </CDBContainer>
    <div></div>
<p>Figura 1. Viga de concreto bi-apoiada.</p>

      <h4>React-Bootstrap Figure Component</h4> 
      <Figure> 
        <Figure.Image 
          width={800} 
          height={800} 
          alt="200x200"
src={FigMagnel}
        /> 
        <Figure.Caption> 
          Greetings from GeeksforGeeks 
        </Figure.Caption> 
      </Figure>

     
</div>);
}; export default TutotMagnel;