def getGroupedIcons
	# Remove all duplicate icons
	icons = {}

	valid_suffixes = ['inverse']

	@glyphs.each do |name, value|
		name_split = name.to_s.rpartition('-')
		infix = name_split.first
		suffix = name_split.last

		if valid_suffixes.include?(suffix)
			infix_index = icons[infix]
			if infix_index.nil?
				icons[infix] = [value]
			else
				icons[infix] << value
			end
		else
			icons[name.to_s] = [value]
		end

	end

	return icons
end
