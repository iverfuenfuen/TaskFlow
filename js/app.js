const tareas = [
  { id: 1, titulo: 'Diseñar mockups del panel', prioridad: 'alta', estado: 'hacer' },
  { id: 2, titulo: 'Configurar repositorio Git', prioridad: 'media', estado: 'hacer' },
  { id: 3, titulo: 'Escribir README del proyecto', prioridad: 'baja', estado: 'hacer' },
  { id: 4, titulo: 'Crear estructura HTML', prioridad: 'alta', estado: 'progreso' },
  { id: 5, titulo: 'Definir tokens de diseño', prioridad: 'media', estado: 'progreso' },
  { id: 6, titulo: 'Instalar extensiones VS Code', prioridad: 'baja', estado: 'hecho' },
];

const columnasMap = {
  'hacer': 'col-hacer',
  'progreso': 'col-progreso',
  'hecho': 'col-hecho',
};

function crearCardTarea(tarea) {
  const card = document.createElement('div');
  card.classList.add('tarea-card');
  card.dataset.id = String(tarea.id);

  const titulo = document.createElement('h3');
  titulo.classList.add('tarea-titulo');
  titulo.textContent = tarea.titulo;

  const badge = document.createElement('span');
  badge.classList.add('badge-prioridad', 'prioridad-' + tarea.prioridad);
  badge.textContent = tarea.prioridad;

  const btnMover = document.createElement('button');
  btnMover.classList.add('btn-mover');
  btnMover.textContent = 'Mover →';
  btnMover.dataset.id = String(tarea.id);

  const btnEliminar = document.createElement('button');
  btnEliminar.classList.add('btn-eliminar');
  btnEliminar.textContent = '✕';
  btnEliminar.dataset.id = String(tarea.id);

  card.appendChild(titulo);
  card.appendChild(badge);
  card.appendChild(btnMover);
  card.appendChild(btnEliminar);

  return card;
}

function renderTareas() {
  document.getElementById('col-hacer').innerHTML = '';
  document.getElementById('col-progreso').innerHTML = '';
  document.getElementById('col-hecho').innerHTML = '';

  tareas.forEach(tarea => {
    const card = crearCardTarea(tarea);
    const colId = columnasMap[tarea.estado];
    document.getElementById(colId).appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderTareas);
