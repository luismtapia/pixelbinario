import * as LucideIcons from "lucide-react";
import * as FontAwesomeIcons from "react-icons/fa";

const IconRenderer = ({ iconName, size = 20, className = "" }) => {
  const IconComponent = LucideIcons[iconName] || FontAwesomeIcons[iconName];

  if (!IconComponent) {
    // Icono por defecto por si el nombre está mal escrito
    return <LucideIcons.HelpCircle size={size} className={className} />;
  }

  return <IconComponent size={size} className={className} />;
};

export default IconRenderer;