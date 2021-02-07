export const ComprasConstant = {
  table: {
    headers: [
      {field: 'codigoBarras', header: 'Código barras.', widthForCell: '150px'},
      {field: 'descripcion', header: 'Dscripción', widthForCell: '230px'},
      {field: 'precio', header: 'Precio', widthForCell: '150px'},
      {field: 'existencia', header: 'Existencia', widthForCell: 'auto'}
    ],
    headersCompra: [
      {field: 'codigoBarras', header: 'Código barras.', widthForCell: '150px'},
      {field: 'descripcion', header: 'Dscripción', widthForCell: '230px'},
      {field: 'precio', header: 'Precio', widthForCell: '150px'},
      {field: 'cantidad', header: 'Cantidad', widthForCell: 'auto'}
    ]
  },
  titles: {
    articulos: 'Lista des articulos disponibles que tienen existencia',
    articulosCompra: 'Artículos seleccionados para la compra',
    compraLabel: 'Comprar',
    registro: 'Compra realizada exitosamente.',
    sinExistencia: 'Este artículo no posee la cantidad que desea comprar.',
    sinCantdad: 'Debe ingresar cantidades válidas en todos los articulos para realizar la compra.'
  }
};
