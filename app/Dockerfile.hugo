FROM klakegg/hugo:ext-alpine

WORKDIR /usr/src/app

# Copy the Hugo site source into the container.
COPY . .

# Create a start script for conditional fast render outside the mounted app directory
RUN echo '#!/bin/sh' > /usr/local/bin/start.sh && \
    echo 'if [ -n "$HUGO_DISABLE_FAST_RENDER" ]; then' >> /usr/local/bin/start.sh && \
    echo '  hugo server --bind 0.0.0.0 --port 1313 -D --disableFastRender' >> /usr/local/bin/start.sh && \
    echo 'else' >> /usr/local/bin/start.sh && \
    echo '  hugo server --bind 0.0.0.0 --port 1313 -D' >> /usr/local/bin/start.sh && \
    echo 'fi' >> /usr/local/bin/start.sh && \
    chmod +x /usr/local/bin/start.sh

EXPOSE 1313

ENTRYPOINT []
CMD ["/bin/sh", "/usr/local/bin/start.sh"]
