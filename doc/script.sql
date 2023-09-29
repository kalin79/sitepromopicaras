-- Ver todas las etiquetas registradas
Select t1.numero_documento, t1.nombres, t1.apellidos,
(Select codigo From codigos Where id = t2.codigo_id),
t2.codigo_id, t2.id, t2.fecha_registro, t2.created_user_id
From participantes t1
inner join participante_codigo t2
on t1.id = t2.participante_id
Where t2.fecha_registro = '2023-09-16'

-- Ver todas las etiquetas de un usuario en especifico 
Select t1.numero_documento, t1.nombres, t1.apellidos,
(Select codigo From codigos Where id = t2.codigo_id),
t2.codigo_id, t2.id, t2.fecha_registro, t2.created_user_id
From participantes t1
inner join participante_codigo t2
on t1.id = t2.participante_id
Where t1.numero_documento = '47006689'


-- Ver cuantos codigos tiene un usuario

Select t1.numero_documento, count(*)
From participantes t1
inner join participante_codigo t2
on t1.id = t2.participante_id
group by t1.numero_documento


-- Verificar si hay codigo repetido en un mismo usuario
Select t4.codigo, count(*)
From (Select t1.numero_documento as numero_documento , t1.nombres as nombres, t1.apellidos as apellidos,
(Select codigo From codigos Where id = t2.codigo_id) as codigo,
t2.codigo_id as idcodigo, t2.id as id, t2.fecha_registro
From participantes t1
inner join participante_codigo t2
on t1.id = t2.participante_id
Where t1.numero_documento = '71251259') t4
group by t4.codigo

-- Verificar mayor de 19 etiquetas registradas
Select t1.numero_documento, count(*)
From participantes t1
inner join participante_codigo t2
on t1.id = t2.participante_id
group by t1.numero_documento
HAVING count(*) > 19

Select count(*)
From participantes

Select count(*)
From participante_codigo
where deleted_at is null

-- Buscar a un participante

Select *
From participantes
Where numero_documento is null


-- Codigos que se repiten mas de 1 vez

Select t4.codigo, count(*) cantidad
From (Select t1.numero_documento as numero_documento , t1.nombres as nombres, t1.apellidos as apellidos,
(Select codigo From codigos Where id = t2.codigo_id) as codigo,
t2.codigo_id as idcodigo, t2.id as id, t2.fecha_registro
From participantes t1
inner join participante_codigo t2
on t1.id = t2.participante_id) t4
group by t4.codigo
HAVING count(*) > 1

60

-- buscar un codigo en especifico
Select *
From codigos
Where codigo = 'DYE86ZMA'

Select *
From participante_codigo
Where codigo_id = '5565319'
