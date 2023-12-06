# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "deep-forest"
  spec.version       = "0.1.0"
  spec.authors       = ["Ian Del Giudice"]
  spec.email         = ["ian.pvd@gmail.com"]

  spec.summary       = %q{Deep forest is a basic jekyll theme for developer resumes and portfolios.}
  spec.homepage      = "https://github.com/ian-pvd/deep-forest"
  spec.license       = "MIT"

  spec.metadata["plugin_type"] = "theme"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.9.3"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"

  spec.add_development_dependency "bundler"
end
