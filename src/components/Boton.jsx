

const handleDownload = async () => {
  try {
    const baseUrl = import.meta.env.BASE_URL; // e.g. /MiPaginaPersonal/
    const response = await fetch(`${baseUrl}files/cv-martin.pdf`);
    if (!response.ok) throw new Error('Archivo no encontrado o error de red');

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV-Martin.pdf';
    document.body.appendChild(link);
    link.click();
    link.remove();

    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error al descargar el archivo:', error);
    alert('No se pudo descargar el archivo.');
  }
};
export default handleDownload;

