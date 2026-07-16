export async function loadAST() {
return await (await fetch("http://localhost:9000/ast.json")).json()
}
