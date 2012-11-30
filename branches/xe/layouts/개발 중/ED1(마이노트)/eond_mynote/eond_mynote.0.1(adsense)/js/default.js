function back_top()
{
	x = document.body.scrollLeft;
	y = document.body.scrollTop;
	step = 2;

	while ((x != 0) || (y != 0)) {
		scroll (x, y);
		step += (step * step / 100);
		x -= step;
		y -= step;
		if (x < 0) x = 0;
		if (y < 0) y = 0;
	} 
	scroll (0, 0);
}
