class BinaryTree {
	constructor() {
		this.root = null;
	}
	add(value) {
		if (!this.root) {
			this.root = new TreeNode(value);
		} else {
			let node = this.root;
			let newNode = new TreeNode(value);
			while (node) {
				if (value > node.value) {
					if (!node.right) {
						break;
					}
					node = node.right;
				} else {
					if (!node.left) {
						break;
					}
					node = node.left;
				}
			}
			if (value > node.value) {
				node.right = newNode;
			} else {
				node.left = newNode;
			}
		}
	}
	print(root = this.root) {
		if (!root) return true;
		console.log('value',root.value);
		this.print('left',root.left);
		this.print('right',root.right);
	}
}

class TreeNode {
	constructor(val) {
		this.value = val;
		this.left = null;
		this.right = null;
	}
}

const tree = new BinaryTree();
tree.add(10);
tree.add(20);
tree.add(6);
tree.add(15);
tree.add(30);
tree.add(5);

tree.print();
