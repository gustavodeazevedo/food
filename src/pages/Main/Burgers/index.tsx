import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'
import { Snacks } from '../../../components/Snacks'

export default function Burgers() {
  const data = [
    {
      id: 1,
      snack: 'burger',
      name: 'Hambúrguer com Cebola Caramelizada',
      description:
        'Uma deliciosa carne de hambúrguer grelhada coberta com queijo suíço derretido e cebolas caramelizadas lentamente, acompanhada de alface, tomate e picles, servida em um pão de brioche tostado.',
      price: 25.5,
      image: 'https://cdn.deliway.com.br/blog/base/d74/27a/e91/cebola-caramelizada-hamburguer.jpg',
    },
    {
      id: 2,
      snack: 'Hambúrguer Clássico com Ovo',
      name: 'Extra bacon',
      description:
        'Um hambúrguer de carne bovina grelhada coberto com queijo cheddar derretido, fatias de bacon crocante e um ovo frito no topo, acompanhado de alface, tomate e maionese, servido em um pão de hambúrguer tostado.',
      price: 23.5,
      image: 'https://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/hamburguer-com-ovo-receita-ponto-do-ovo.jpg',
    },
    { 
    id: 3,
      snack: 'burger',
      name: 'Clássico Americano Burger',
      description:
        'Um hambúrguer suculento de carne de bovino Angus, coberto com queijo cheddar derretido, fatias frescas de tomate, alface iceberg crocante, cebola roxa e um generoso toque de molho barbecue defumado, servido em um pão de hambúrguer macio.',
      price: 23.5,
      image: 'https://th.bing.com/th/id/R.e401e67d2cea722a4d3c8c1279e426a8?rik=UYEi2vStJ17HZA&pid=ImgRaw&r=0',
    },
    {
      id: 3,
        snack: 'burger',
        name: 'Hambúrguer Duplo Clássico',
        description:
          'Dois hambúrgueres de carne bovina grelhada, cada um coberto com queijo americano derretido, fatias de bacon crocante, alface fresca, tomate e cebola roxa, tudo isso entre um pão de hambúrguer tostado.',
        price: 23.5,
        image: 'https://assets.unileversolutions.com/recipes-v2/230452.jpg',
      }
      ,
    {
      id: 3,
        snack: 'burger',
        name: 'Hambúrguer com Molho Barbecue',
        description:
          'Um hambúrguer de carne suculenta coberto com queijo cheddar derretido, fatias de bacon crocante e um generoso molho barbecue defumado, acompanhado de alface, tomate e cebola roxa, servido em um pão de hambúrguer grelhado',
        price: 23.5,
        image: 'https://blog.novasafra.com.br/wp-content/uploads/2016/12/Cidad%C3%A3o-do-Mundo-P%C3%A3o-Australiano-Hamb%C3%BArguer-de-Costela-Queijo-cheddar-cebola-grelhada-bacon-e-molho-barbecue.-825x550-1.jpg',
      }


  ]

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúrgueres</SnackTitle>
      <Snacks snacks={data}></Snacks>
    </>
  )
}
