var boardSize=5
var tower=[]
var board=document.getElementById("board")


function initialisation()
{
	CreateBoard()
}

function CreateBoard()
{
	board.innerHTML=""

	tower = new Array(boardSize)
	for (x=0;x<boardSize;x++) // boucle qui crée le tableau en HTML à partir des variables NbLignes et boardSize
	{
		tower[x]= new Array(boardSize)
		var line=document.createElement("tr")
		line.id="line"+x;

		board.appendChild(line)
		for(y=0;y<boardSize;y++)
		{
			tower[x][y]=0;
			FillCell(x,y)
		}

	}

}

function CellClick()
{

}

function FillCell(x,y)
{
	var td=document.createElement("td")
	document.getElementById("line" + x).appendChild(td)
	var cell =document.createElement("div")
	cell.id="cell"+x+"-"+y
	cell.className="cell"
	cell.x=x
	cell.y=y
	cell.addEventListener("click",CellClick)
	td.appendChild(cell)

	for (i=1;i<5;i++)
	{
		let level=document.createElement("div");
		level.className="level"+i
		cell.appendChild(level)
	}

}
