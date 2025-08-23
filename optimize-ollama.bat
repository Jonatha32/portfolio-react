@echo off
echo Optimizando Ollama para mejor rendimiento...

echo.
echo 1. Verificando modelos instalados:
ollama list

echo.
echo 2. Descargando modelo más ligero (si no existe):
ollama pull llama3.2:1b

echo.
echo 3. Configuraciones recomendadas:
echo - Usar modelo llama3.2:1b en lugar de 3b
echo - Reducir num_predict a 60
echo - Bajar temperature a 0.3
echo - Limitar contexto con num_ctx: 1024

echo.
echo 4. Para mejorar aún más el rendimiento:
echo - Cerrar aplicaciones innecesarias
echo - Verificar que Ollama use GPU si está disponible
echo - Considerar usar qwen2.5:0.5b para máxima velocidad

echo.
echo 5. Verificando estado del servicio:
curl -s http://localhost:11434/api/tags

pause