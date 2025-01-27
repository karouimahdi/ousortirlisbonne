type LexicalNodeType = 
  | 'text'
  | 'linebreak'
  | 'heading'
  | 'paragraph'
  | 'root'
  | 'list'
  | 'listitem'
  | 'link';

interface LexicalNode {
  type: LexicalNodeType;
  version: number;
  children?: LexicalNode[];
  text?: string;
  tag?: string;
  indent?: number;
  format?: string;
  style?: string;
  url?: string;
  target?: string;
}

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&')
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#039;');
}

function convertNodeToHtml(node: LexicalNode): string {
  try {
    switch (node.type) {
      case 'text':
        return node.text ? escapeHtml(node.text) : '';

      case 'linebreak':
        return '<br>';

      case 'heading':
        const tag = node.tag || 'h1';
        const headingContent = node.children?.map(convertNodeToHtml).join('') || '';
        return `<${tag}>${headingContent}</${tag}>`;

      case 'paragraph':
        const paragraphContent = node.children?.map(convertNodeToHtml).join('') || '';
        return `<p>${paragraphContent}</p>`;

      case 'list':
        const listTag = node.tag === 'ol' ? 'ol' : 'ul';
        const listContent = node.children?.map(convertNodeToHtml).join('') || '';
        return `<${listTag}>${listContent}</${listTag}>`;

      case 'listitem':
        const listItemContent = node.children?.map(convertNodeToHtml).join('') || '';
        return `<li>${listItemContent}</li>`;

      case 'link':
        const linkContent = node.children?.map(convertNodeToHtml).join('') || '';
        const target = node.target ? ` target="${node.target}"` : '';
        return `<a href="${node.url || '#'}"${target}>${linkContent}</a>`;

      case 'root':
        return node.children?.map(convertNodeToHtml).join('') || '';

      default:
        console.warn(`Unsupported node type: ${node.type}`);
        return '';
    }
  } catch (error) {
    console.error('Error converting node to HTML:', error);
    return '';
  }
}

export function convertLexicalToHtml(lexicalObject?: {
  root: LexicalNode;
}): string {
  if (!lexicalObject) {
    return '';
  }

  try {
    const { root: lexicalObjectRoot } = lexicalObject;

    if (lexicalObjectRoot.type !== 'root') {
      throw new Error('The top-level node must be of type "root".');
    }

    return convertNodeToHtml(lexicalObjectRoot);
  } catch (error) {
    console.error('Error converting Lexical to HTML:', error);
    return '';
  }
}
