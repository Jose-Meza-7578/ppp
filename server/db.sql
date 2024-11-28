create procedure sp_mostrarproductoporsede
(
@idsede int
)
as
select idprod,descripcion,modelo,tipop,idmarca,marcanombre,idcat,catnombre,idcolor,colornombre,
       fechavence,Pre_Compra,Pre_Venta,utilidad,idunidad,unidadnombre,stock,unidadnombre,estado,idsede,sedenombre 
from v_producto_mostrar_sede
    WHERE 
        idsede = 2 and
		estado = 'Activo'
    ORDER BY 
        descripcion
go