# GetErrors200ResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_codes** | **int** |  | [optional] 
**errors** | [**List[GetErrors200ResponseDataErrorsInner]**](GetErrors200ResponseDataErrorsInner.md) |  | [optional] 

## Example

```python
from sipher_client.models.get_errors200_response_data import GetErrors200ResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetErrors200ResponseData from a JSON string
get_errors200_response_data_instance = GetErrors200ResponseData.from_json(json)
# print the JSON string representation of the object
print(GetErrors200ResponseData.to_json())

# convert the object into a dict
get_errors200_response_data_dict = get_errors200_response_data_instance.to_dict()
# create an instance of GetErrors200ResponseData from a dict
get_errors200_response_data_from_dict = GetErrors200ResponseData.from_dict(get_errors200_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


