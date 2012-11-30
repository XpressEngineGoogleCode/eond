Function.prototype.bind = function(object) {
  var _method = this;
  return function() {
    _method.apply(object, arguments);
  }
}

//------------------------------------------------------------------
//	MyCheckBox
//------------------------------------------------------------------
function MyCheckBoxes(oForm)
{
	if (!oForm)
		return;	
	this.checkboxes = [];
	this.limit = 0;
	this.form = oForm;
	var elems = oForm.elements;	
	if (elems.length == 0)
		return;
	
	for (var i=0;i<elems.length;i++)
	{
		if (elems[i].type.toLowerCase() == 'checkbox')
		{
			var mycheckbox = new MyCheckBox(elems[i],this);
			this.addCheckbox(mycheckbox);
		}
	}
}

MyCheckBoxes.prototype = {
	addCheckbox:function(o)
	{
		this.checkboxes.push(o);
	},
	setLimit:function(nLimit)
	{
		this.limit = nLimit;
	},
	onClicked:function(oCheckbox)
	{
		var nChecked = 0;
		if (this.limit)
		{
			var els = this.form.elements;
			for (var i=0;i<els.length;i++)
			{
				var el = els[i];
				if (el.type == 'checkbox' && el.checked)
				{
					nChecked++;
					if (nChecked > this.limit)
					{
						alert(this.limit + "개 까지만 선택할 수 있습니다");
						oCheckbox.onImgCheckBoxClick();
					}
				}
			}
		}
	},
	toggle:function()
	{
		if (this.toggled == false)
			this.checkall();
		else
			this.uncheckall();
		this.toggled = !this.toggled;

	},
	checkall:function()
	{
		for (var i=0;i<this.checkboxes.length;i++)
			this.checkboxes[i].check();
	},
	uncheckall:function()
	{		
		for (var i=0;i<this.checkboxes.length;i++)
			this.checkboxes[i].uncheck();
	},
	invertall:function()
	{		
		for (var i=0;i<this.checkboxes.length;i++)
			this.checkboxes[i].invert();
	}
}


function MyCheckBox(oCheck,oListener)
{
	this.value = null;
	this.imgCheckbox = null;
	this.checkbox = null;
	this.listener = null;
	this.func = null;
	this.resources = {
		normal	: './layouts/eond_networks/images/btn_autologin_off.gif',
		checked	: './layouts/eond_networks/images/btn_autologin.gif'
	};
	this.styles = {
		width			: '29px',
		height			: '16px',
		border			: '0px',
		cursor			: 'hand',
		margin		 	: '2px 4px 2px 0px',
		verticalAlign 	: 'top'
	}
	this.bind(oCheck);
	if (oListener)
		this.listener = oListener;
}


MyCheckBox.prototype = {
	bind:function(oCheck)
	{
		if (!oCheck.form)
			return;		
		this.checkbox = oCheck;
		this.value = oCheck.value;
		this.func = this.checkbox.onclick;
		this.checkbox.onclick = this.onCheckBoxClick.bind(this);
		this.generate();
	},
	check:function()
	{
		this.checkbox.checked = true;
		this.syncImgCheckbox();
	},
	uncheck:function()
	{	
		this.checkbox.checked = false;		
		this.syncImgCheckbox();
	},
	invert:function()
	{	
		this.checkbox.checked = !this.checkbox.checked;		
		this.syncImgCheckbox();
	},
	applyStyles:function(o,styles)
	{
		for (var prop in styles)
			o.style[prop] = styles[prop];
	},		
	generate:function()
	{
		var oImg = this.checkbox.parentNode.insertBefore(document.createElement('img'),this.checkbox);
		this.applyStyles(oImg,this.styles);	
		this.imgCheckbox = oImg;
		this.checkbox.style.position = "absolute";
		this.checkbox.style.left = "-10000px";
		oImg.onclick = this.onImgCheckBoxClick.bind(this);		
		this.syncImgCheckbox();
	},
	syncImgCheckbox:function()
	{
		this.imgCheckbox.src = this.isChecked() ? this.resources.checked : this.resources.normal;		
	},
	isChecked:function()
	{
		return this.checkbox.checked;
	},
	onCheckBoxClick:function()
	{
		this.syncImgCheckbox();		
		if(this.func)
			this.func();
		if (this.listener)
			this.listener.onClicked(this);
	},
	onImgCheckBoxClick:function()
	{
		this.checkbox.checked = !this.checkbox.checked;
		this.onCheckBoxClick();
	}
}




