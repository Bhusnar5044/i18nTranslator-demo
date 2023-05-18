import { SankeyData, SankeyLink, SankeyNode } from '@store/salary/types';

export function generateSankeyData(node: SankeyNode, parentName?: string): SankeyData {
    const nodes: SankeyNode[] = [];
    const links: SankeyLink[] = [];

    function traverseNode(node: SankeyNode, parentName?: string): string {
        const nodeName = node?.name || '';
        nodes.push({ name: nodeName, value: node?.value || 0 });

        if (parentName) {
            links.push({ source: parentName, target: nodeName, value: node?.value || 0 });
        }

        if (node?.children) {
            const childrenNames = node.children.map((childNode) => traverseNode(childNode, nodeName));
            return childrenNames.join(';');
        }

        return nodeName;
    }

    traverseNode(node, parentName);

    return { nodes, links };
}
