const originalString = `
<br />\nPara aquellos momentos en que tu vida depende de otros, para esos estamos nosotros.<br />\n<br />\nRodi es una empresa médica decidida a la atención integral de los pacientes con enfermedades neoplásticas, así como a la prevención dentro de las poblaciones consideradas en riesgos de desarrollar algún tipo de cáncer.<br />\n<br />\nComprometido en brindar un servicio Oncólogico de calidad en lo ético y humano.<br />\n<br />\nSemanalmente se desarrolla in comité científico de todos los casos que se presenta en el centro para su discusión entre los especialista y tomar una mejor decisión del tratamiento.

`;

const strippedString = originalString.replace(/(<([^>]+)>)/gi, "");

console.log(strippedString);

