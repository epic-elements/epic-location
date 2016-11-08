SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/",
      "epic-location/": "/src/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/",
      "epic-location/": "src/"
    }
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.16",
      "jspm": "npm:jspm@0.17.0-beta.29",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha",
      "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
      "events": "github:jspm/nodelibs-events@0.2.0-alpha",
      "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
      "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
      "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
      "net": "github:jspm/nodelibs-net@0.2.0-alpha",
      "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.0",
      "jsbn": "npm:jsbn@0.1.0",
      "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
      "jodid25519": "npm:jodid25519@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
      "tls": "github:jspm/nodelibs-tls@0.2.0-alpha",
      "http": "github:jspm/nodelibs-http@0.2.0-alpha",
      "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
      "url": "github:jspm/nodelibs-url@0.2.0-alpha",
      "tweetnacl": "npm:tweetnacl@0.14.3",
      "https": "github:jspm/nodelibs-https@0.2.0-alpha",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
      "zlib": "github:jspm/nodelibs-zlib@0.2.0-alpha",
      "module": "github:jspm/nodelibs-module@0.2.0-alpha",
      "tty": "github:jspm/nodelibs-tty@0.2.0-alpha",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "child_process": "github:jspm/nodelibs-child_process@0.2.0-alpha",
      "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
      "punycode": "github:jspm/nodelibs-punycode@0.2.0-alpha",
      "dns": "github:jspm/nodelibs-dns@0.2.0-alpha",
      "dgram": "github:jspm/nodelibs-dgram@0.2.0-alpha",
      "cluster": "github:jspm/nodelibs-cluster@0.2.0-alpha",
      "timers": "github:jspm/nodelibs-timers@0.2.0-alpha",
      "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
      "domain": "github:jspm/nodelibs-domain@0.2.0-alpha",
      "repl": "github:jspm/nodelibs-repl@0.2.0-alpha",
      "console": "github:jspm/nodelibs-console@0.2.0-alpha"
    },
    "packages": {
      "npm:jspm@0.17.0-beta.29": {
        "map": {
          "jspm-registry": "npm:jspm-registry@0.4.1",
          "core-js": "npm:core-js@1.2.7",
          "ncp": "npm:ncp@2.0.0",
          "mkdirp": "npm:mkdirp@0.5.1",
          "sane": "npm:sane@1.4.1",
          "graceful-fs": "npm:graceful-fs@4.1.9",
          "jspm-github": "npm:jspm-github@0.14.11",
          "chalk": "npm:chalk@1.1.3",
          "rimraf": "npm:rimraf@2.5.4",
          "jspm-npm": "npm:jspm-npm@0.29.7",
          "minimatch": "npm:minimatch@3.0.3",
          "liftoff": "npm:liftoff@2.3.0",
          "systemjs": "npm:systemjs@0.19.39",
          "semver": "npm:semver@5.3.0",
          "glob": "npm:glob@6.0.4",
          "systemjs-builder": "npm:systemjs-builder@0.15.32",
          "uglify-js": "npm:uglify-js@2.7.3",
          "request": "npm:request@2.75.0",
          "traceur": "npm:traceur@0.0.105",
          "bluebird": "npm:bluebird@3.4.6",
          "proper-lockfile": "npm:proper-lockfile@1.2.0"
        }
      },
      "npm:jspm-registry@0.4.1": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.9",
          "rimraf": "npm:rimraf@2.5.4",
          "semver": "npm:semver@4.3.6",
          "rsvp": "npm:rsvp@3.3.3"
        }
      },
      "npm:sane@1.4.1": {
        "map": {
          "minimatch": "npm:minimatch@3.0.3",
          "exec-sh": "npm:exec-sh@0.2.0",
          "walker": "npm:walker@1.0.7",
          "fb-watchman": "npm:fb-watchman@1.9.0",
          "watch": "npm:watch@0.10.0",
          "minimist": "npm:minimist@1.2.0"
        }
      },
      "npm:jspm-github@0.14.11": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.9",
          "mkdirp": "npm:mkdirp@0.5.1",
          "rimraf": "npm:rimraf@2.5.4",
          "semver": "npm:semver@5.3.0",
          "request": "npm:request@2.75.0",
          "bluebird": "npm:bluebird@3.4.6",
          "netrc": "npm:netrc@0.1.4",
          "which": "npm:which@1.2.11",
          "expand-tilde": "npm:expand-tilde@1.2.2",
          "tar-fs": "npm:tar-fs@1.14.0"
        }
      },
      "npm:rimraf@2.5.4": {
        "map": {
          "glob": "npm:glob@7.1.1"
        }
      },
      "npm:jspm-npm@0.29.7": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.9",
          "mkdirp": "npm:mkdirp@0.5.1",
          "semver": "npm:semver@5.3.0",
          "systemjs-builder": "npm:systemjs-builder@0.15.32",
          "request": "npm:request@2.75.0",
          "traceur": "npm:traceur@0.0.105",
          "bluebird": "npm:bluebird@3.4.6",
          "which": "npm:which@1.2.11",
          "rmdir": "npm:rmdir@1.2.0",
          "buffer-peek-stream": "npm:buffer-peek-stream@1.0.1",
          "readdirp": "npm:readdirp@2.1.0",
          "tar-fs": "npm:tar-fs@1.14.0"
        }
      },
      "npm:glob@6.0.4": {
        "map": {
          "minimatch": "npm:minimatch@3.0.3",
          "inherits": "npm:inherits@2.0.3",
          "inflight": "npm:inflight@1.0.6",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "once": "npm:once@1.4.0"
        }
      },
      "npm:systemjs-builder@0.15.32": {
        "map": {
          "glob": "npm:glob@7.1.1",
          "mkdirp": "npm:mkdirp@0.5.1",
          "systemjs": "npm:systemjs@0.19.39",
          "uglify-js": "npm:uglify-js@2.7.3",
          "traceur": "npm:traceur@0.0.105",
          "bluebird": "npm:bluebird@3.4.6",
          "es6-template-strings": "npm:es6-template-strings@2.0.1",
          "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.14.0",
          "babel-plugin-transform-system-register": "npm:babel-plugin-transform-system-register@0.0.1",
          "data-uri-to-buffer": "npm:data-uri-to-buffer@0.0.4",
          "babel-plugin-transform-global-system-wrapper": "npm:babel-plugin-transform-global-system-wrapper@0.0.1",
          "babel-plugin-transform-cjs-system-wrapper": "npm:babel-plugin-transform-cjs-system-wrapper@0.2.1",
          "source-map": "npm:source-map@0.5.6",
          "rollup": "npm:rollup@0.36.3",
          "babel-core": "npm:babel-core@6.17.0"
        }
      },
      "npm:glob@7.1.1": {
        "map": {
          "minimatch": "npm:minimatch@3.0.3",
          "inherits": "npm:inherits@2.0.3",
          "inflight": "npm:inflight@1.0.6",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "fs.realpath": "npm:fs.realpath@1.0.0",
          "once": "npm:once@1.4.0"
        }
      },
      "npm:liftoff@2.3.0": {
        "map": {
          "extend": "npm:extend@3.0.0",
          "rechoir": "npm:rechoir@0.6.2",
          "fined": "npm:fined@1.0.2",
          "flagged-respawn": "npm:flagged-respawn@0.3.2",
          "lodash.isstring": "npm:lodash.isstring@4.0.1",
          "findup-sync": "npm:findup-sync@0.4.3",
          "lodash.mapvalues": "npm:lodash.mapvalues@4.6.0",
          "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
          "resolve": "npm:resolve@1.1.7"
        }
      },
      "npm:request@2.75.0": {
        "map": {
          "extend": "npm:extend@3.0.0",
          "aws-sign2": "npm:aws-sign2@0.6.0",
          "oauth-sign": "npm:oauth-sign@0.8.2",
          "forever-agent": "npm:forever-agent@0.6.1",
          "caseless": "npm:caseless@0.11.0",
          "combined-stream": "npm:combined-stream@1.0.5",
          "node-uuid": "npm:node-uuid@1.4.7",
          "stringstream": "npm:stringstream@0.0.5",
          "aws4": "npm:aws4@1.5.0",
          "tough-cookie": "npm:tough-cookie@2.3.1",
          "qs": "npm:qs@6.2.1",
          "tunnel-agent": "npm:tunnel-agent@0.4.3",
          "isstream": "npm:isstream@0.1.2",
          "bl": "npm:bl@1.1.2",
          "har-validator": "npm:har-validator@2.0.6",
          "hawk": "npm:hawk@3.1.3",
          "http-signature": "npm:http-signature@1.1.1",
          "mime-types": "npm:mime-types@2.1.12",
          "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
          "form-data": "npm:form-data@2.0.0",
          "is-typedarray": "npm:is-typedarray@1.0.0"
        }
      },
      "npm:traceur@0.0.105": {
        "map": {
          "glob": "npm:glob@5.0.15",
          "semver": "npm:semver@4.3.6",
          "rsvp": "npm:rsvp@3.3.3",
          "source-map-support": "npm:source-map-support@0.2.10",
          "commander": "npm:commander@2.9.0"
        }
      },
      "npm:chalk@1.1.3": {
        "map": {
          "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
          "has-ansi": "npm:has-ansi@2.0.0",
          "strip-ansi": "npm:strip-ansi@3.0.1",
          "ansi-styles": "npm:ansi-styles@2.2.1",
          "supports-color": "npm:supports-color@2.0.0"
        }
      },
      "npm:glob@5.0.15": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimatch": "npm:minimatch@3.0.3",
          "inflight": "npm:inflight@1.0.6",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "once": "npm:once@1.4.0"
        }
      },
      "npm:proper-lockfile@1.2.0": {
        "map": {
          "extend": "npm:extend@3.0.0",
          "graceful-fs": "npm:graceful-fs@4.1.9",
          "err-code": "npm:err-code@1.1.1",
          "retry": "npm:retry@0.10.0"
        }
      },
      "npm:minimatch@3.0.3": {
        "map": {
          "brace-expansion": "npm:brace-expansion@1.1.6"
        }
      },
      "npm:mkdirp@0.5.1": {
        "map": {
          "minimist": "npm:minimist@0.0.8"
        }
      },
      "npm:rechoir@0.6.2": {
        "map": {
          "resolve": "npm:resolve@1.1.7"
        }
      },
      "npm:fined@1.0.2": {
        "map": {
          "expand-tilde": "npm:expand-tilde@1.2.2",
          "lodash.isplainobject": "npm:lodash.isplainobject@4.0.6",
          "lodash.isstring": "npm:lodash.isstring@4.0.1",
          "parse-filepath": "npm:parse-filepath@1.0.1",
          "lodash.pick": "npm:lodash.pick@4.4.0",
          "lodash.assignwith": "npm:lodash.assignwith@4.2.0",
          "lodash.isempty": "npm:lodash.isempty@4.4.0"
        }
      },
      "npm:inflight@1.0.6": {
        "map": {
          "once": "npm:once@1.4.0",
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:uglify-js@2.7.3": {
        "map": {
          "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
          "async": "npm:async@0.2.10",
          "source-map": "npm:source-map@0.5.6",
          "yargs": "npm:yargs@3.10.0"
        }
      },
      "npm:readdirp@2.1.0": {
        "map": {
          "graceful-fs": "npm:graceful-fs@4.1.9",
          "minimatch": "npm:minimatch@3.0.3",
          "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:tar-fs@1.14.0": {
        "map": {
          "mkdirp": "npm:mkdirp@0.5.1",
          "pump": "npm:pump@1.0.1",
          "tar-stream": "npm:tar-stream@1.5.2"
        }
      },
      "npm:systemjs@0.19.39": {
        "map": {
          "when": "npm:when@3.7.7"
        }
      },
      "npm:source-map-support@0.2.10": {
        "map": {
          "source-map": "npm:source-map@0.1.32"
        }
      },
      "npm:exec-sh@0.2.0": {
        "map": {
          "merge": "npm:merge@1.2.0"
        }
      },
      "npm:walker@1.0.7": {
        "map": {
          "makeerror": "npm:makeerror@1.0.11"
        }
      },
      "npm:fb-watchman@1.9.0": {
        "map": {
          "bser": "npm:bser@1.0.2"
        }
      },
      "npm:es6-template-strings@2.0.1": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.12",
          "esniff": "npm:esniff@1.1.0"
        }
      },
      "npm:brace-expansion@1.1.6": {
        "map": {
          "concat-map": "npm:concat-map@0.0.1",
          "balanced-match": "npm:balanced-match@0.4.2"
        }
      },
      "npm:babel-plugin-transform-es2015-modules-systemjs@6.14.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:once@1.4.0": {
        "map": {
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:expand-tilde@1.2.2": {
        "map": {
          "os-homedir": "npm:os-homedir@1.0.2"
        }
      },
      "npm:bl@1.1.2": {
        "map": {
          "readable-stream": "npm:readable-stream@2.0.6"
        }
      },
      "npm:has-ansi@2.0.0": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:strip-ansi@3.0.1": {
        "map": {
          "ansi-regex": "npm:ansi-regex@2.0.0"
        }
      },
      "npm:findup-sync@0.4.3": {
        "map": {
          "detect-file": "npm:detect-file@0.1.0",
          "resolve-dir": "npm:resolve-dir@0.1.1",
          "is-glob": "npm:is-glob@2.0.1",
          "micromatch": "npm:micromatch@2.3.11"
        }
      },
      "npm:babel-plugin-transform-cjs-system-wrapper@0.2.1": {
        "map": {
          "babel-plugin-transform-cjs-system-require": "npm:babel-plugin-transform-cjs-system-require@0.1.1",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:readable-stream@2.0.6": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "isarray": "npm:isarray@1.0.0",
          "core-util-is": "npm:core-util-is@1.0.2",
          "string_decoder": "npm:string_decoder@0.10.31"
        }
      },
      "npm:esniff@1.1.0": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.12",
          "d": "npm:d@1.0.0"
        }
      },
      "npm:rollup@0.36.3": {
        "map": {
          "source-map-support": "npm:source-map-support@0.4.4"
        }
      },
      "npm:resolve-dir@0.1.1": {
        "map": {
          "expand-tilde": "npm:expand-tilde@1.2.2",
          "global-modules": "npm:global-modules@0.2.3"
        }
      },
      "npm:babel-runtime@6.11.6": {
        "map": {
          "core-js": "npm:core-js@2.4.1",
          "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
        }
      },
      "npm:readable-stream@2.1.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "util-deprecate": "npm:util-deprecate@1.0.2",
          "isarray": "npm:isarray@1.0.0",
          "core-util-is": "npm:core-util-is@1.0.2",
          "string_decoder": "npm:string_decoder@0.10.31",
          "buffer-shims": "npm:buffer-shims@1.0.0"
        }
      },
      "npm:commander@2.9.0": {
        "map": {
          "graceful-readlink": "npm:graceful-readlink@1.0.1"
        }
      },
      "npm:combined-stream@1.0.5": {
        "map": {
          "delayed-stream": "npm:delayed-stream@1.0.0"
        }
      },
      "npm:pump@1.0.1": {
        "map": {
          "once": "npm:once@1.4.0",
          "end-of-stream": "npm:end-of-stream@1.1.0"
        }
      },
      "npm:source-map-support@0.4.4": {
        "map": {
          "source-map": "npm:source-map@0.5.6"
        }
      },
      "npm:es5-ext@0.10.12": {
        "map": {
          "es6-symbol": "npm:es6-symbol@3.1.0",
          "es6-iterator": "npm:es6-iterator@2.0.0"
        }
      },
      "npm:har-validator@2.0.6": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "commander": "npm:commander@2.9.0",
          "pinkie-promise": "npm:pinkie-promise@2.0.1",
          "is-my-json-valid": "npm:is-my-json-valid@2.15.0"
        }
      },
      "npm:tar-stream@1.5.2": {
        "map": {
          "bl": "npm:bl@1.1.2",
          "readable-stream": "npm:readable-stream@2.1.5",
          "end-of-stream": "npm:end-of-stream@1.1.0",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "npm:babel-core@6.17.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "minimatch": "npm:minimatch@3.0.3",
          "path-is-absolute": "npm:path-is-absolute@1.0.1",
          "source-map": "npm:source-map@0.5.6",
          "lodash": "npm:lodash@4.16.4",
          "path-exists": "npm:path-exists@1.0.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-register": "npm:babel-register@6.16.3",
          "babel-code-frame": "npm:babel-code-frame@6.16.0",
          "private": "npm:private@0.1.6",
          "json5": "npm:json5@0.4.0",
          "slash": "npm:slash@1.0.0",
          "babel-traverse": "npm:babel-traverse@6.16.0",
          "babel-helpers": "npm:babel-helpers@6.16.0",
          "babel-types": "npm:babel-types@6.16.0",
          "debug": "npm:debug@2.2.0",
          "babel-generator": "npm:babel-generator@6.17.0",
          "shebang-regex": "npm:shebang-regex@1.0.0",
          "babylon": "npm:babylon@6.12.0",
          "convert-source-map": "npm:convert-source-map@1.3.0",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:yargs@3.10.0": {
        "map": {
          "window-size": "npm:window-size@0.1.0",
          "cliui": "npm:cliui@2.1.0",
          "decamelize": "npm:decamelize@1.2.0",
          "camelcase": "npm:camelcase@1.2.1"
        }
      },
      "npm:es6-symbol@3.1.0": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.12",
          "d": "npm:d@0.1.1"
        }
      },
      "npm:es6-iterator@2.0.0": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.12",
          "es6-symbol": "npm:es6-symbol@3.1.0",
          "d": "npm:d@0.1.1"
        }
      },
      "npm:source-map@0.1.32": {
        "map": {
          "amdefine": "npm:amdefine@1.0.0"
        }
      },
      "npm:micromatch@2.3.11": {
        "map": {
          "is-glob": "npm:is-glob@2.0.1",
          "is-extglob": "npm:is-extglob@1.0.0",
          "object.omit": "npm:object.omit@2.0.0",
          "regex-cache": "npm:regex-cache@0.4.3",
          "normalize-path": "npm:normalize-path@2.0.1",
          "kind-of": "npm:kind-of@3.0.4",
          "parse-glob": "npm:parse-glob@3.0.4",
          "braces": "npm:braces@1.8.5",
          "array-unique": "npm:array-unique@0.2.1",
          "filename-regex": "npm:filename-regex@2.0.0",
          "arr-diff": "npm:arr-diff@2.0.0",
          "extglob": "npm:extglob@0.3.2",
          "expand-brackets": "npm:expand-brackets@0.1.5"
        }
      },
      "npm:d@1.0.0": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.12"
        }
      },
      "npm:d@0.1.1": {
        "map": {
          "es5-ext": "npm:es5-ext@0.10.12"
        }
      },
      "npm:parse-filepath@1.0.1": {
        "map": {
          "is-absolute": "npm:is-absolute@0.2.5",
          "path-root": "npm:path-root@0.1.1",
          "map-cache": "npm:map-cache@0.2.2"
        }
      },
      "npm:rmdir@1.2.0": {
        "map": {
          "node.flow": "npm:node.flow@1.2.3"
        }
      },
      "npm:makeerror@1.0.11": {
        "map": {
          "tmpl": "npm:tmpl@1.0.4"
        }
      },
      "npm:detect-file@0.1.0": {
        "map": {
          "fs-exists-sync": "npm:fs-exists-sync@0.1.0"
        }
      },
      "npm:is-glob@2.0.1": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0"
        }
      },
      "npm:bser@1.0.2": {
        "map": {
          "node-int64": "npm:node-int64@0.4.0"
        }
      },
      "npm:cliui@2.1.0": {
        "map": {
          "right-align": "npm:right-align@0.1.3",
          "wordwrap": "npm:wordwrap@0.0.2",
          "center-align": "npm:center-align@0.1.3"
        }
      },
      "npm:end-of-stream@1.1.0": {
        "map": {
          "once": "npm:once@1.3.3"
        }
      },
      "npm:parse-glob@3.0.4": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0",
          "is-glob": "npm:is-glob@2.0.1",
          "glob-base": "npm:glob-base@0.3.0",
          "is-dotfile": "npm:is-dotfile@1.0.2"
        }
      },
      "npm:which@1.2.11": {
        "map": {
          "isexe": "npm:isexe@1.1.2"
        }
      },
      "npm:babel-messages@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6"
        }
      },
      "npm:babel-register@6.16.3": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "core-js": "npm:core-js@2.4.1",
          "babel-core": "npm:babel-core@6.17.0",
          "lodash": "npm:lodash@4.16.4",
          "mkdirp": "npm:mkdirp@0.5.1",
          "path-exists": "npm:path-exists@1.0.0",
          "source-map-support": "npm:source-map-support@0.4.4",
          "home-or-tmp": "npm:home-or-tmp@1.0.0"
        }
      },
      "npm:babel-code-frame@6.16.0": {
        "map": {
          "chalk": "npm:chalk@1.1.3",
          "esutils": "npm:esutils@2.0.2",
          "js-tokens": "npm:js-tokens@2.0.0"
        }
      },
      "npm:form-data@2.0.0": {
        "map": {
          "combined-stream": "npm:combined-stream@1.0.5",
          "mime-types": "npm:mime-types@2.1.12",
          "asynckit": "npm:asynckit@0.4.0"
        }
      },
      "npm:once@1.3.3": {
        "map": {
          "wrappy": "npm:wrappy@1.0.2"
        }
      },
      "npm:babel-traverse@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-code-frame": "npm:babel-code-frame@6.16.0",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-types": "npm:babel-types@6.16.0",
          "debug": "npm:debug@2.2.0",
          "lodash": "npm:lodash@4.16.4",
          "babylon": "npm:babylon@6.12.0",
          "invariant": "npm:invariant@2.2.1",
          "globals": "npm:globals@8.18.0"
        }
      },
      "npm:babel-helpers@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:babel-types@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "lodash": "npm:lodash@4.16.4",
          "esutils": "npm:esutils@2.0.2",
          "to-fast-properties": "npm:to-fast-properties@1.0.2"
        }
      },
      "npm:is-my-json-valid@2.15.0": {
        "map": {
          "xtend": "npm:xtend@4.0.1",
          "generate-function": "npm:generate-function@2.0.0",
          "generate-object-property": "npm:generate-object-property@1.2.0",
          "jsonpointer": "npm:jsonpointer@4.0.0"
        }
      },
      "npm:babel-generator@6.17.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-messages": "npm:babel-messages@6.8.0",
          "babel-types": "npm:babel-types@6.16.0",
          "lodash": "npm:lodash@4.16.4",
          "source-map": "npm:source-map@0.5.6",
          "detect-indent": "npm:detect-indent@3.0.1",
          "jsesc": "npm:jsesc@1.3.0"
        }
      },
      "npm:regex-cache@0.4.3": {
        "map": {
          "is-primitive": "npm:is-primitive@2.0.0",
          "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
        }
      },
      "npm:object.omit@2.0.0": {
        "map": {
          "for-own": "npm:for-own@0.1.4",
          "is-extendable": "npm:is-extendable@0.1.1"
        }
      },
      "npm:http-signature@1.1.1": {
        "map": {
          "assert-plus": "npm:assert-plus@0.2.0",
          "jsprim": "npm:jsprim@1.3.1",
          "sshpk": "npm:sshpk@1.10.1"
        }
      },
      "npm:glob-base@0.3.0": {
        "map": {
          "is-glob": "npm:is-glob@2.0.1",
          "glob-parent": "npm:glob-parent@2.0.0"
        }
      },
      "npm:node.flow@1.2.3": {
        "map": {
          "node.extend": "npm:node.extend@1.0.8"
        }
      },
      "npm:kind-of@3.0.4": {
        "map": {
          "is-buffer": "npm:is-buffer@1.1.4"
        }
      },
      "npm:mime-types@2.1.12": {
        "map": {
          "mime-db": "npm:mime-db@1.24.0"
        }
      },
      "npm:extglob@0.3.2": {
        "map": {
          "is-extglob": "npm:is-extglob@1.0.0"
        }
      },
      "npm:hawk@3.1.3": {
        "map": {
          "cryptiles": "npm:cryptiles@2.0.5",
          "sntp": "npm:sntp@1.0.9",
          "boom": "npm:boom@2.10.1",
          "hoek": "npm:hoek@2.16.3"
        }
      },
      "npm:right-align@0.1.3": {
        "map": {
          "align-text": "npm:align-text@0.1.4"
        }
      },
      "npm:center-align@0.1.3": {
        "map": {
          "align-text": "npm:align-text@0.1.4",
          "lazy-cache": "npm:lazy-cache@1.0.4"
        }
      },
      "npm:babel-helper-hoist-variables@6.8.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "babel-types": "npm:babel-types@6.16.0"
        }
      },
      "npm:is-absolute@0.2.5": {
        "map": {
          "is-relative": "npm:is-relative@0.2.1",
          "is-windows": "npm:is-windows@0.1.1"
        }
      },
      "npm:pinkie-promise@2.0.1": {
        "map": {
          "pinkie": "npm:pinkie@2.0.4"
        }
      },
      "npm:sshpk@1.10.1": {
        "map": {
          "assert-plus": "npm:assert-plus@1.0.0",
          "getpass": "npm:getpass@0.1.6",
          "asn1": "npm:asn1@0.2.3",
          "dashdash": "npm:dashdash@1.14.0"
        }
      },
      "npm:is-equal-shallow@0.1.3": {
        "map": {
          "is-primitive": "npm:is-primitive@2.0.0"
        }
      },
      "npm:braces@1.8.5": {
        "map": {
          "repeat-element": "npm:repeat-element@1.1.2",
          "expand-range": "npm:expand-range@1.8.2",
          "preserve": "npm:preserve@0.2.0"
        }
      },
      "npm:align-text@0.1.4": {
        "map": {
          "kind-of": "npm:kind-of@3.0.4",
          "longest": "npm:longest@1.0.1",
          "repeat-string": "npm:repeat-string@1.5.4"
        }
      },
      "npm:cryptiles@2.0.5": {
        "map": {
          "boom": "npm:boom@2.10.1"
        }
      },
      "npm:sntp@1.0.9": {
        "map": {
          "hoek": "npm:hoek@2.16.3"
        }
      },
      "npm:global-modules@0.2.3": {
        "map": {
          "is-windows": "npm:is-windows@0.2.0",
          "global-prefix": "npm:global-prefix@0.1.4"
        }
      },
      "npm:boom@2.10.1": {
        "map": {
          "hoek": "npm:hoek@2.16.3"
        }
      },
      "npm:detect-indent@3.0.1": {
        "map": {
          "minimist": "npm:minimist@1.2.0",
          "get-stdin": "npm:get-stdin@4.0.1",
          "repeating": "npm:repeating@1.1.3"
        }
      },
      "npm:jsprim@1.3.1": {
        "map": {
          "json-schema": "npm:json-schema@0.2.3",
          "extsprintf": "npm:extsprintf@1.0.2",
          "verror": "npm:verror@1.3.6"
        }
      },
      "npm:for-own@0.1.4": {
        "map": {
          "for-in": "npm:for-in@0.1.6"
        }
      },
      "npm:expand-brackets@0.1.5": {
        "map": {
          "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
        }
      },
      "npm:arr-diff@2.0.0": {
        "map": {
          "arr-flatten": "npm:arr-flatten@1.0.1"
        }
      },
      "npm:glob-parent@2.0.0": {
        "map": {
          "is-glob": "npm:is-glob@2.0.1"
        }
      },
      "npm:global-prefix@0.1.4": {
        "map": {
          "is-windows": "npm:is-windows@0.2.0",
          "which": "npm:which@1.2.11",
          "ini": "npm:ini@1.3.4",
          "osenv": "npm:osenv@0.1.3"
        }
      },
      "npm:path-root@0.1.1": {
        "map": {
          "path-root-regex": "npm:path-root-regex@0.1.2"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "github:jspm/nodelibs-buffer@0.2.0-alpha": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "npm:node.extend@1.0.8": {
        "map": {
          "is": "npm:is@0.2.7",
          "object-keys": "npm:object-keys@0.4.0"
        }
      },
      "npm:home-or-tmp@1.0.0": {
        "map": {
          "os-tmpdir": "npm:os-tmpdir@1.0.2",
          "user-home": "npm:user-home@1.1.1"
        }
      },
      "npm:getpass@0.1.6": {
        "map": {
          "assert-plus": "npm:assert-plus@1.0.0"
        }
      },
      "npm:verror@1.3.6": {
        "map": {
          "extsprintf": "npm:extsprintf@1.0.2"
        }
      },
      "npm:ecc-jsbn@0.1.1": {
        "map": {
          "jsbn": "npm:jsbn@0.1.0"
        }
      },
      "npm:jodid25519@1.0.2": {
        "map": {
          "jsbn": "npm:jsbn@0.1.0"
        }
      },
      "npm:bcrypt-pbkdf@1.0.0": {
        "map": {
          "tweetnacl": "npm:tweetnacl@0.14.3"
        }
      },
      "npm:babel-plugin-transform-global-system-wrapper@0.0.1": {
        "map": {
          "babel-template": "npm:babel-template@6.16.0"
        }
      },
      "npm:generate-object-property@1.2.0": {
        "map": {
          "is-property": "npm:is-property@1.0.2"
        }
      },
      "github:jspm/nodelibs-stream@0.2.0-alpha": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:invariant@2.2.1": {
        "map": {
          "loose-envify": "npm:loose-envify@1.2.0"
        }
      },
      "npm:babel-template@6.16.0": {
        "map": {
          "babel-runtime": "npm:babel-runtime@6.11.6",
          "lodash": "npm:lodash@4.16.4",
          "babylon": "npm:babylon@6.12.0",
          "babel-traverse": "npm:babel-traverse@6.16.0",
          "babel-types": "npm:babel-types@6.16.0"
        }
      },
      "npm:dashdash@1.14.0": {
        "map": {
          "assert-plus": "npm:assert-plus@1.0.0"
        }
      },
      "npm:expand-range@1.8.2": {
        "map": {
          "fill-range": "npm:fill-range@2.2.3"
        }
      },
      "npm:loose-envify@1.2.0": {
        "map": {
          "js-tokens": "npm:js-tokens@1.0.3"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "base64-js": "npm:base64-js@1.2.0",
          "ieee754": "npm:ieee754@1.1.8"
        }
      },
      "npm:is-relative@0.2.1": {
        "map": {
          "is-unc-path": "npm:is-unc-path@0.1.1"
        }
      },
      "npm:fill-range@2.2.3": {
        "map": {
          "repeat-element": "npm:repeat-element@1.1.2",
          "repeat-string": "npm:repeat-string@1.5.4",
          "isobject": "npm:isobject@2.1.0",
          "randomatic": "npm:randomatic@1.1.5",
          "is-number": "npm:is-number@2.1.0"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:osenv@0.1.3": {
        "map": {
          "os-homedir": "npm:os-homedir@1.0.2",
          "os-tmpdir": "npm:os-tmpdir@1.0.2"
        }
      },
      "npm:repeating@1.1.3": {
        "map": {
          "is-finite": "npm:is-finite@1.0.2"
        }
      },
      "github:jspm/nodelibs-url@0.2.0-alpha": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "github:jspm/nodelibs-crypto@0.2.0-alpha": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:isobject@2.1.0": {
        "map": {
          "isarray": "npm:isarray@1.0.0"
        }
      },
      "npm:is-unc-path@0.1.1": {
        "map": {
          "unc-path-regex": "npm:unc-path-regex@0.1.2"
        }
      },
      "github:jspm/nodelibs-http@0.2.0-alpha": {
        "map": {
          "http-browserify": "npm:stream-http@2.4.0"
        }
      },
      "npm:randomatic@1.1.5": {
        "map": {
          "kind-of": "npm:kind-of@3.0.4",
          "is-number": "npm:is-number@2.1.0"
        }
      },
      "npm:is-number@2.1.0": {
        "map": {
          "kind-of": "npm:kind-of@3.0.4"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "randombytes": "npm:randombytes@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "browserify-sign": "npm:browserify-sign@4.0.0",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "public-encrypt": "npm:public-encrypt@4.0.0"
        }
      },
      "npm:is-finite@1.0.2": {
        "map": {
          "number-is-nan": "npm:number-is-nan@1.0.1"
        }
      },
      "github:jspm/nodelibs-zlib@0.2.0-alpha": {
        "map": {
          "zlib-browserify": "npm:browserify-zlib@0.1.4"
        }
      },
      "npm:stream-http@2.4.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5",
          "xtend": "npm:xtend@4.0.1",
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "querystring": "npm:querystring@0.2.0",
          "punycode": "npm:punycode@1.3.2"
        }
      },
      "npm:pbkdf2@3.0.9": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:browserify-zlib@0.1.4": {
        "map": {
          "readable-stream": "npm:readable-stream@2.1.5",
          "pako": "npm:pako@0.2.9"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "miller-rabin": "npm:miller-rabin@4.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "ripemd160": "npm:ripemd160@1.0.1",
          "sha.js": "npm:sha.js@2.4.5",
          "cipher-base": "npm:cipher-base@1.0.3"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "inherits": "npm:inherits@2.0.3",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "elliptic": "npm:elliptic@6.3.2",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "randombytes": "npm:randombytes@2.0.3",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "elliptic": "npm:elliptic@6.3.2",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "github:jspm/nodelibs-punycode@0.2.0-alpha": {
        "map": {
          "punycode-browserify": "npm:punycode@1.3.2"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "cipher-base": "npm:cipher-base@1.0.3",
          "inherits": "npm:inherits@2.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:sha.js@2.4.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.9",
          "asn1.js": "npm:asn1.js@4.8.1"
        }
      },
      "npm:elliptic@6.3.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "hash.js": "npm:hash.js@1.0.3",
          "brorand": "npm:brorand@1.0.6"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:asn1.js@4.8.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "github:jspm/nodelibs-domain@0.2.0-alpha": {
        "map": {
          "domain-browserify": "npm:domain-browser@1.1.7"
        }
      },
      "github:jspm/nodelibs-timers@0.2.0-alpha": {
        "map": {
          "timers-browserify": "npm:timers-browserify@1.4.2"
        }
      },
      "npm:timers-browserify@1.4.2": {
        "map": {
          "process": "npm:process@0.11.9"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "epic-location": {
      "main": "epic-location.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@webcomponents/custom-elements": "github:webcomponents/custom-elements@1.0.0-alpha.3",
    "rxjs": "npm:rxjs@5.0.0-rc.1",
    "url-parse": "npm:url-parse@1.1.6"
  },
  packages: {
    "npm:url-parse@1.1.6": {
      "map": {
        "querystringify": "npm:querystringify@0.0.4",
        "requires-port": "npm:requires-port@1.0.0"
      }
    },
    "npm:rxjs@5.0.0-rc.1": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    }
  }
});
