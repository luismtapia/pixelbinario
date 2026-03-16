import { Palette, Image, BookOpen, Type, PenTool, Layout, ChevronsLeftRightEllipsis } from 'lucide-react';

export const categories = [
  { id: 1, name: 'Colores', icon: <Palette />, link: '/recursos/colores', font: 'font-zcool-qing', count: '150+ recursos' },
  { id: 2, name: 'Web', icon: <ChevronsLeftRightEllipsis />, link: '/recursos/web', font: 'font-zcool-qing', count: '150+ recursos' },
  { id: 3, name: 'Fuentes', icon: <Type />, link: '/recursos/fuentes', font: 'font-zcool-qing', count: '50+ sitios' },
  { id: 4, name: 'Photoshop', icon: <PenTool />, link: '/recursos/photoshop', font: 'font-zcool-kuai', count: '40+ pinceles' },
  { id: 5, name: 'Figma', icon: <Layout />, link: '/recursos/figma', font: 'font-zcool-xiao', count: '100+ plantillas' },
  { id: 6, name: 'UX/UI', icon: <Layout />, link: '/recursos/uxui', font: 'font-zcool-xiao', count: '100+ plantillas' },
  { id: 7, name: 'Imágenes', icon: <Image />, link: '/recursos/imagenes', font: 'font-zcool-kuai', count: '80+ bancos' },
  { id: 8, name: 'Tutoriales', icon: <BookOpen />, link: '/recursos/tutoriales', font: 'font-zcool-xiao', count: '200+ guías' },
  { id: 9, name: 'Diseño', icon: <BookOpen />, link: '/recursos/diseno', font: 'font-zcool-xiao', count: '200+ guías' },
  { id: 10, name: 'Otro', icon: <BookOpen />, link: '/recursos/otro', font: 'font-zcool-xiao', count: '200+ guías' },
  { id: 11, name: 'Mas', icon: <BookOpen />, link: '/recursos/mas', font: 'font-zcool-xiao', count: '200+ guías' },
  { id: 12, name: 'oldcolores', icon: <BookOpen />, link: '/recursos/coloresold', font: 'font-zcool-xiao', count: '200+ guías' },
];