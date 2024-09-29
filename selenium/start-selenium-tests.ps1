$i=1
for(;$i -le 150;$i++)
{
	Start-Process -NoNewWindow python .\selenium_unittests.py
	Start-Sleep -Seconds 1
}