def getGroupedIcons
	# Remove all duplicate icons
	icons = {}

	@glyphs.each do |name, value|
		infix = name.to_s.split('-')[0]
		infix_index = icons[infix]

		if infix_index.nil?
			icons[infix] = [value]
		else
			icons[infix] << value
		end
	end

	return icons
end
