import {DetallePedido} from './detallePedido';

export interface Pedido {

  tipoPagoPk: number;

  username?: string;

  detallePedido: DetallePedido[];

}
